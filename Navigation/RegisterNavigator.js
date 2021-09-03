import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Profile/LoginScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const ProfileNavigator = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nextScreen, setNextScreen] = useState();

  const usernameInputHandler = userAcc => {
    setUsername(userAcc);
  };

  const passwordInputHandler = userPass => {
    setPassword(userPass);
  };

  const profileIn = () => {
    setNextScreen(1);
  };

  const profileOut = () =>{
    setNextScreen();
  }

  let content = (
    <LoginScreen
      loginUsername={usernameInputHandler}
      loginPassword={passwordInputHandler}
      username={username}
      password={password}
      goToProfile={profileIn}
    />
  );

  const load = async () => {
    try {
      let username = await AsyncStorage.getItem('UserName');
      let password = await AsyncStorage.getItem('UserPassword');

      if (username !== null && password !== null) {
        setUsername(username);
        setPassword(password);
        setNextScreen(1);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (nextScreen != null && username != '' && password != '') {
    content = (
      <ProfileScreen
        logOutUsername={usernameInputHandler}
        logOutPassword={passwordInputHandler}
        quitProfile={profileOut}
        username={username}
      />
    );
  }

  return <View>{content}</View>;
};

export default ProfileNavigator;
