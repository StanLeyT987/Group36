import React from 'react';
import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity
  } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from '@react-navigation/native';



  const LoginScreen = props =>{

    const save = async() =>{
        if (props.username != '' && props.password != '') {
            try {
              await AsyncStorage.setItem('UserName', props.username);
              await AsyncStorage.setItem('UserPassword', props.password);
              
            } catch (err) {
              alert(err);
            }
            alert('Welcome' + ' ' + 'Login Successful', [
              {title: 'Return', style: 'default', onPress: props.goToProfile},
              // {onPressIn=()=>navigation.navigate('Profile')},
            ]);
          } else {
            console.log("error");
            alert('Invalid', 'Please enter your username and password', [
              {title: 'Return', style: 'cancel'},
            ]);
        }
    };
    


  const navigation=useNavigation();

  return(
      <View 
        style={{
            flex: 1,
            backgroundColor: '#bfc7c1'}}>
        <View style={{flex:1,alignSelf:'center',top:50}}>
            <Text 
                style={{
                  fontSize: 22,
                  alignItems: 'center',
                  margin: 20,
                  color: '#050505',
                  marginBottom: 60,}}>Login Page</Text>
        </View>
        <View style={{flex:1}}>
            <TextInput
                style={{
                    top:150,
                    alignSelf:'center',
                    width: 300,
                    backgroundColor: '#Ffffff',
                    padding: 15,
                    marginBottom: 20,
                    borderRadius: 30,}}
                onChangeText={props.loginUsername}
                value={props.username}
                placeholder="Username"
            />

            <TextInput
                style={{
                    top:150,
                    alignSelf:'center',
                    width: 300,
                    backgroundColor: '#Ffffff',
                    padding: 15,
                    marginBottom: 20,
                    borderRadius: 30,
                }}
                onChangeText={props.loginPassword}
                value={props.password}
                placeholder="Password"
                secureTextEntry={true}
            />
        </View>
        <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-evenly',
                }}>
            <View style={{
              top:300
            }}>
                
                <TouchableOpacity style={{
                    backgroundColor: '#f15454',
                    justifyContent: 'center',
                    height: 50,
                    width:100,
                    borderRadius: 10,
                }}  onPressIn={()=>navigation.navigate('Register')}>
                    <Text
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: 'black',
                        }}>
                        Register
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity><Text>TouchMe</Text></TouchableOpacity> */}
            </View>
            <View style={{
              top:300
            }}>
                <TouchableOpacity style={{
                    
                    backgroundColor: '#f15454',
                    justifyContent: 'center',
                    height: 50,
                    width:100,
                    borderRadius: 10,
                }} onPress={() => save()}>
                    <Text style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'black',
                    }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
  )
};

export default LoginScreen;
