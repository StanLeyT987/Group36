import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';


import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/utar-logos_black.png')}
        style={{width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',}}>
        {/* Title */}
        <Text style={{fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,}}>Hello World</Text>

        {/* Button */}
        <TouchableOpacity
          style={{backgroundColor: 'white',
          width: 200,
          height: 40,
          borderRadius: 10,
          marginLeft: 25,
          marginTop: 25,
          justifyContent: 'center',
          alignItems: 'center'}}
          onPress={() => navigation.navigate('Location Search')}>
          <Text style={{fontSize: 16,
          fontWeight: 'bold'}}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Search Bar */}
      <TouchableOpacity
        style={{backgroundColor: 'white',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute',
        top: 50,}}
        onPressIn={() => navigation.navigate('Location Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={{fontSize: 16,
        fontWeight: 'bold',}}>Where are you going?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
