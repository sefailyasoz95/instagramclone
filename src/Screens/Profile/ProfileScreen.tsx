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
import { BlurView } from '@react-native-community/blur';
import Stories from '../../Components/Profile/Stories';

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
  const opacity = useSharedValue(1);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const mBottom = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      //   top: withSpring(top.value, SPRING_CONFIG),
      transform: [
        { translateX: withSpring(x.value, SPRING_CONFIG) },
        { translateY: withSpring(y.value, SPRING_CONFIG) },
        // { scale: scale.value },
      ],
      marginBottom: mBottom.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart(_, context) {
      // context.startTop = top.value;
      (context.x = 0), (context.y = y.value);
    },
    onActive({ translationX, translationY }, context) {
      //   top.value = context.startTop + translationY;
      // x.value = context.x + translationX;
      if (y.value > 0) {
        // top.value = 0;
        // x.value = 0;
        // y.value = 0;
        console.log('pulling down: ', translationY);
        mBottom.value = 0;
        opacity.value = 1;
        if (translationY > 30) {
          scale.value = withTiming(2);
        }
        if (translationY > 60) {
          scale.value = withTiming(3);
        }
      } else {
        // top.value = 0;
        // runOnJS(navigation.goBack)();
        console.log('pulling up: ', Math.abs(context.y + translationY));
        // if (Math.abs(context.y + translationY) > 10) {
        //   opacity.value = withTiming(0.9);
        // }
        // if (Math.abs(context.y + translationY) > 20) {
        //   opacity.value = withTiming(0.8);
        // }
        // if (Math.abs(context.y + translationY) > 30) {
        //   opacity.value = withTiming(0.7);
        // }
        // if (Math.abs(context.y + translationY) > 40) {
        //   opacity.value = withTiming(0.6);
        // }
        // if (Math.abs(context.y + translationY) > 60) {
        //   opacity.value = withTiming(0.3);
        // }
        // console.log('translationY: ', translationY);
        // console.log('context.y: ', context.y);
        if (!(Math.abs(context.y + translationY) > 200)) {
          mBottom.value = context.y + translationY;
          y.value = context.y + translationY;
        }
      }
    },
    onEnd() {
      if (y.value > 0) {
        y.value = 0;
        console.log('pulling down: ');
      } else {
        console.log('pulling up: ');
      }
    },
  });
  // profile-img.jpeg
  // netflix-logo.jpeg
  // newProfileImage.jpg
  return (
    <View style={styles.safeArea}>
      <ImageBackground
        source={require('../../Assets/Images/gtr.jpg')}
        // source={require('../../Assets/Images/profile-img.jpeg')}
        width={50}
        height={50}
      >
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={animatedStyle}>
            <View style={styles.container}>
              <Header />
              <NumberContainer />
              <About />
              <ButtonSection />
            </View>
          </Animated.View>
        </PanGestureHandler>
        <View style={[styles.container, { height: 100 }]}>
          <Stories />
        </View>
      </ImageBackground>
      <ProfileMaterialTabStack />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    position: 'absolute',
  },
});
