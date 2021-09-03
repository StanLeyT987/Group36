import React from 'react';
import {Text, Pressable, TouchableOpacity} from 'react-native';


export const BookButton = props => {
  return (
    <TouchableOpacity style={{marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,}} onPress={props.book}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Book
      </Text>
    </TouchableOpacity>
  );
};

export const CancelBookButton = props => {
  return (
    <TouchableOpacity style={{marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,}} onPress={props.cancel}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Cancel Book
      </Text>
    </TouchableOpacity>
  );
};

