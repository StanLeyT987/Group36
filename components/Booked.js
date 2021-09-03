import React from 'react';
import { Text, Image, ScrollView,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const BookedPost = props => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () =>{
    navigation.navigate('Post',{postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage}>
    <ScrollView style={{marginHorizontal: 20,
      marginTop: 5,}}>
      {/* Image */}
      <Image
        style={{width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,}}
        source={{
          uri: post.image,
        }}
      />

      {/* Type & Desription */}
      <Text style={{fontSize: 18,
      lineHeight: 26,}} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
    </ScrollView>
    </Pressable>
  );
};

export default BookedPost;

