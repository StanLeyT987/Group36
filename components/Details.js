import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Alert} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {BookButton, CancelBookButton} from '../components/Button';



const DetailedPost = props => {
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
          marginLeft: 5,
        },
        totalPrice: {
          color: '#5b5b5b',
          textDecorationLine: 'underline',
        },
        fullDescription: {
          marginVertical: 20,
          fontSize: 16,
          lineHeight: 24,
        },
        searchButton:{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10
        }
      });
      
  const post = props.post;
  const [cancelVisible, setCancelVisible] = useState(false);

  const bookState = () => {
    firestore()
      .collection('book')
      .where('id', '==', post.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setCancelVisible(documentSnapshot.data().booked);
        });
      });
  };

  useEffect(() => {
    bookState();
  }, [bookPlace]);

  const bookPlace = async () => {
    await firestore()
      .collection('book')
      .add({
        id: post.id,
        image: post.image,
        type: post.type,
        title: post.title,
        description: post.description,
        bed: post.bed,
        bedroom: post.bedroom,
        oldPrice: post.oldPrice,
        newPrice: post.newPrice,
        totalPrice: post.totalPrice,
        booked: true,
      })
      .then(() => {
        Alert.alert(
          'Successful',
          'Your booking can be view at your profile page.',
          [{title: 'Return', style: 'default'}],
        );
      });
  };

  const cancelBook = async () => {
    let fs = firebase.firestore();
    let collectionRef = fs.collection('book');
    collectionRef
      .where('id', '==', post.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref
            .delete()
            .then(() => {
              Alert.alert(
                'Cancel Successful',
                'Your booking is now cancel.',
                [{title: 'Return', style: 'default'}],
              );
              setCancelVisible(false);
            })
            .catch(function (error) {
              console.error('Error removing document: ', error);
            });
        });
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  };

  let button = <BookButton book={bookPlace} />;

  if (cancelVisible == true) {
    button = <CancelBookButton cancel={cancelBook} />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

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

      {/* Full description */}
      <View>
        <Text style={styles.fullDescription}>{post.description}</Text>
      </View>

      {/* Book Button */}
      {button}
    </ScrollView>
  );
};



export default DetailedPost;

