import React, { useRef, useState } from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { data } from '../../Helpers/data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../StackParamLists/AuthStackParamList';
import { SharedElement } from 'react-navigation-shared-element';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProfileMaterialTabStack from '../../Stack/ProfileMaterialTabStack';
type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Profile'>;
  // route: RouteProp<AppStackParamList, >;
};
const newData = {
  id: 5,
  image:
    'https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_400x400.jpg',
  name: 'Sefa İlyas Öz',
};
const ProfileScreen = ({ navigation }: Props) => {
  const [screenStates, setScreenStates] = useState({
    autoPlay: true,
    loop: false,
    showUser: false,
    loading: false,
  });
  const [createProfile, setCreateProfile] = useState(false);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const top = useSharedValue(0);
  const right = useSharedValue(0);
  const overlayBottom = useSharedValue(200);
  const overlayOpacitiy = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
      opacity: opacity.value,
    };
  });
  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: overlayBottom.value,
        },
      ],
      opacity: overlayOpacitiy.value,
    };
  });
  const animatedHeader = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, { duration: 750, easing: Easing.bounce }),
    };
  });
  const animatedEdit = useAnimatedStyle(() => {
    return {
      right: withTiming(right.value, { duration: 750, easing: Easing.bounce }),
    };
  });

  const handleUserContainer = () => {
    setScreenStates({ ...screenStates, showUser: true });
    (scale.value = withTiming(1, {
      duration: 750,
      easing: Easing.out(Easing.exp),
    })),
      (opacity.value = withTiming(1, { duration: 500 }));
    top.value = 50;
    right.value = 20;
  };
  const toggleOverlay = () => {
    if (createProfile) {
      overlayOpacitiy.value = withTiming(0, { duration: 500 });
      overlayBottom.value = withTiming(200, { duration: 750 });
      setTimeout(() => {
        setCreateProfile(false);
      }, 800);
    } else {
      overlayBottom.value = withTiming(0, { duration: 750 });
      overlayOpacitiy.value = withTiming(1, { duration: 500 });
      setCreateProfile(true);
      // inputRef.current?.focus()
    }
  };
  const handleSave = () => {
    data.push(newData);
    toggleOverlay();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <View style={styles.topHeader}>
            <View style={styles.topHeaderLeft}>
              {/* <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color={'white'}
              /> */}
              <Text style={styles.name}>ifbbbro_sefa</Text>
            </View>
            <View style={styles.topHeaderRight}>
              <TouchableOpacity>
                <Feather
                  name="plus-square"
                  size={25}
                  color={'white'}
                  style={{ margin: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="menu"
                  size={22}
                  color={'white'}
                  style={{ margin: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imgAndNumbers}>
            <View style={styles.image}>
              <Image
                source={require('../../Assets/Images/profile-img.jpeg')}
                width={50}
                height={50}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={styles.numbers}>
              <TouchableOpacity style={styles.number}>
                <Text style={styles.numberDigits}>105</Text>
                <Text style={styles.numberText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.number}>
                <Text style={styles.numberDigits}>10M</Text>
                <Text style={styles.numberText}>Followers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.number}>
                <Text style={styles.numberDigits}>223</Text>
                <Text style={styles.numberText}>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.about}>
            <Text style={styles.aboutText}>Fit Engineer 🐺 </Text>
            <Text style={{ color: 'rgba(200,200,200,0.7)' }}>Athlete</Text>
            <Text style={styles.aboutText}>🏋 Fitness | Cars | Music </Text>
            <Text style={styles.aboutText}>💻 Software Developer</Text>
            <Text style={styles.aboutText}>📍 Istanbul, Turkey</Text>
            <Text style={styles.aboutText}>
              {' '}
              ▶ {` `}YouTube.com/sefailyasoz
            </Text>
            <Text style={styles.aboutLink}>sefailyasoz.netlify.app/</Text>
          </View>
          <View style={styles.editButton}>
            <Button
              text="Edit Profile"
              onPress={() => {}}
              color="gray"
              textColor="white"
              corners="curved"
              size="xlarge"
              buttonStyle={{
                borderRadius: 5,
              }}
            />
            <View style={styles.buttons}>
              <Button
                text="Ad Tools"
                onPress={() => {}}
                color="gray"
                textColor="white"
                buttonStyle={{
                  marginHorizontal: 2,
                  width: '30%',
                  borderRadius: 5,
                }}
              />
              <Button
                text="Insights"
                onPress={() => {}}
                color="gray"
                textColor="white"
                buttonStyle={{
                  marginHorizontal: 2,
                  width: '30%',
                  borderRadius: 5,
                }}
              />
              <Button
                text="Email"
                onPress={() => {}}
                color="gray"
                textColor="white"
                buttonStyle={{
                  marginHorizontal: 2,
                  width: '30%',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <ProfileMaterialTabStack />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#040404',
    alignItems: 'center',
    width: '98%',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'white',
    alignSelf: 'center',
  },
  editButton: {
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    marginLeft: 5,
  },
  aboutText: {
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
  },
  aboutLink: {
    alignItems: 'center',
    fontSize: 14,
    color: 'lightblue',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  topHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  numbers: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'purple',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  numberDigits: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  numberText: {
    fontSize: 14,
    color: '#fff',
  },
  number: {
    padding: 10,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#040404',
  },
  profileInfo: {
    marginTop: 5,
    width: '100%',
  },
  imgAndNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    letterSpacing: 1,
    fontSize: 17,
  },
});
