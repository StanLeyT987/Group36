import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailedPost from '../components/Details';
import firestore from '@react-native-firebase/firestore';


const PostScreen = props => {
  const route = useRoute();
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list = [];
        await firestore()
          .collection('feed')
          .where('id', '==', route.params.postId)
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
                image: image,
                type: type,
                title: title,
                description: description,
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
    <View style={styles.screen}>
      <FlatList
        data={feed}
        renderItem={({item}) => <DetailedPost post={item} />}
      />
    </View>
  );
};

export default PostScreen;