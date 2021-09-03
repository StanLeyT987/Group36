import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text,  FlatList, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import firestore from '@react-native-firebase/firestore';
import BookedPost from '../components/Booked';



const ProfileScreen = props => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const list = [];
      await firestore()
        .collection('book')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {id, image, title, type} = doc.data();
            list.push({
              id,
              image: image,
              title: title,
              type,
            });
          });
        });
      setFeed(list);
      if (loading) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      await AsyncStorage.removeItem('UserPassword');
    } catch (err) {
      alert(err);
    } finally {
      props.logOutUsername('');
      props.logOutPassword('');
      props.quitProfile();
    }
  };
  return (
    <View style={{
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'white'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 40, marginTop: 15}}>{props.username}</Text>
        <EvilIcons name="user" size={200} style={{marginVertical: 5}} />
      </View>

      <Text style={{marginTop: 15, marginLeft: 20, fontSize: 20}}>
        Your Booking List:
      </Text>
      <FlatList
        data={feed}
        refreshing={loading}
        onRefresh={fetchPosts}
        renderItem={({item}) => <BookedPost post={item} />}
      />

      <TouchableOpacity style={styles.button} onPress={remove}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
