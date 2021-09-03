import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Post from '../components/Post';

const SearchResult = props => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list = [];
        await firestore()
          .collection('feed')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const {
                id,
                image,
                bed,
                bedroom,
                description,
                newPrice,
                oldPrice,
                title,
                totalPrice,
                type,
              } = doc.data();
              list.push({
                id,
                image:
                  image,
                type: type,
                title: title,
                description:
                  description,
                bed: bed,
                bedroom: bedroom,
                oldPrice: oldPrice,
                newPrice: newPrice,
                totalPrice,
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
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResult;
