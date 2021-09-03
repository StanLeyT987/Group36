import 'react-native-gesture-handler';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = props => {
  const save = async () => {
    if (props.username != '' && props.password != '') {
      try {
        await AsyncStorage.setItem('UserName', props.username);
        await AsyncStorage.setItem('UserPassword', props.password);
      } catch (err) {
        alert(err);
      }
      Alert.alert('Welcome', 'Login Successful', [
        {title: 'Return', style: 'default', onPress: props.goToProfile},
      ]);
    } else {
      Alert.alert('Invalid', 'Please enter your username and password', [
        {title: 'Return', style: 'cancel'},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Login Page</Text>

        <TextInput
          style={styles.input}
          onChangeText={props.loginUsername}
          value={props.username}
          placeholder="Username"
        />

        <TextInput
          style={styles.input}
          onChangeText={props.loginPassword}
          value={props.password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.btnText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text style={styles.btnText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfc7c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    alignItems: 'center',
    margin: 10,
    color: '#050505',
    marginBottom: 60,
    fontFamily: 'Arial',
  },
  input:{
    width: 300,
    backgroundColor: '#Ffffff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 30,
  },
  
  userBtn: {
    backgroundColor: '#6e7a71',
    padding: 15,
    marginTop: 100,
    bottom: 0,
    width: 300,
    fontFamily: 'Arial',
  },

  btnText:{
    fontSize: 18,
    textAlign: 'center',
    color: '#Ffffff',
    fontFamily: 'Arial',
  },

  text2:{
    fontSize: 12,   
    color: '#050505',
    bottom: 0,
    alignItems: 'flex-end',
  },

  signup:{
    fontSize: 14,
    marginLeft: 10,
    color: '#050505',
    marginTop: 2,
    fontWeight: 'bold',
    bottom: 0,
  }

});
