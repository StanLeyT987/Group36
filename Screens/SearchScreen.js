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
    <View style={{ margin: 20}}>
      {/* Input component */}
      <TextInput
        style={{fontSize: 20,}}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of location */}
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            style={{flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: 'lightgrey'}}
            onPress={() => navigation.navigate('Guests')}>
            <View style={{backgroundColor: 'lightgrey',
            borderRadius: 10,
            padding: 7,
            marginRight: 15,}}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Search;
