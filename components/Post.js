import React from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';



const Post = props => {

    
  const post = props.post;
  const navigation = useNavigation();

  const goToPostPage = () =>{
    navigation.navigate('Post',{postId: post.id});
  };

  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    image: {
      width: '100%',
      aspectRatio: 3 / 2,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    bedrooms: {
      marginVertical: 10,
      color: '#5b5b5b',
    },
    description: {
      fontSize: 18,
      lineHeight: 26,
    },
    price: {
      fontSize: 18,
      marginVertical: 10,
      flexDirection: 'row',
    },
    oldPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'line-through',
    },
    newPrice: {
      fontWeight: 'bold',
      marginLeft: 5
    },
    totalPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'underline',
    },
  });

  return (
    <TouchableOpacity onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
      {/* Type & Desription */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      {/* Old price & new price */}
      <View style={styles.price}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}>${post.newPrice}</Text>
        <Text>/night</Text>
      </View>
      {/* Total price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </TouchableOpacity>
  );
};

export default Post;


