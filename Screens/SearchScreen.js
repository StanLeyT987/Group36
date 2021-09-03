import React, {useState, useEffect} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


const Search = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list = [];
        await firestore()
          .collection('search')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {description} = doc.data();
              list.push({
                id: doc.id,
                description: description,
              });
            });
          });
        setSearch(list);
        if(loading){
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.input}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of location */}
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guests')}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Search;
