import React, { useRef, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../StackParamLists/AuthStackParamList';
import ProfileMaterialTabStack from '../../Stack/ProfileMaterialTabStack';
import Header from '../../Components/Profile/Header';
import NumberContainer from '../../Components/Profile/NumberContainer';
import About from '../../Components/Profile/About';
import ButtonSection from '../../Components/Profile/ButtonSection';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { SPRING_CONFIG } from '../../Constants/SPRING_CONFIG';

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Profile'>;
  // route: RouteProp<AppStackParamList, >;
};

type AnimatedGHContext = {
  startTop: number;
  scale: number;
  x: number;
  y: number;
};
const ProfileScreen = ({ navigation }: Props) => {
  const [screenStates, setScreenStates] = useState({
    autoPlay: true,
    loop: false,
    showUser: false,
    loading: false,
  });
  const top = useSharedValue(0);
  const scale = useSharedValue(1);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      //   top: withSpring(top.value, SPRING_CONFIG),
      transform: [
        { translateX: withSpring(x.value, SPRING_CONFIG) },
        { translateY: withSpring(y.value, SPRING_CONFIG) },
      ],
    };
  });
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, { duration: 750, easing: Easing.bounce }),
    };
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart(_, context) {
      context.startTop = top.value;
      (context.x = 0), (context.y = y.value);
    },
    onActive({ translationX, translationY }, context) {
      //   top.value = context.startTop + translationY;
      scale.value = 0.95;
      // x.value = context.x + translationX;
      y.value = context.y + translationY;
    },
    onEnd() {
      if (y.value < 150) {
        // top.value = 0;
        // scale.value = 1;
        // x.value = 0;
        // y.value = 0;
      } else {
        // top.value = 0;
        // runOnJS(navigation.goBack)();
        console.log('else: ');
      }
    },
  });
  // profile-img.jpeg
  // netflix-logo.jpeg
  // newProfileImage.jpg
  return (
    <View style={styles.safeArea}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../Assets/Images/profile-img.jpeg')}
              width={50}
              height={50}
              style={[styles.profileImage]}
            />
            <Header />
            <NumberContainer />
            <About />
            <ButtonSection />
          </View>
        </Animated.View>
      </PanGestureHandler>
      <ProfileMaterialTabStack />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#040404',
  },
  profileInfo: {
    width: '100%',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
});
