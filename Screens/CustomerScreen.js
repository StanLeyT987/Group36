import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Customers = props => {
  const [adults, setAdults] = useState(0);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View>
        {/* Row:1 Adults */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: 'grey'}}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>{adults}</Text>
            <TouchableOpacity
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Row:2 Childs */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Childs</Text>
            <Text style={{color: 'grey'}}>Ages 2 to 12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setChilds(Math.max(0, childs - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>{childs}</Text>
            <TouchableOpacity
              onPress={() => setChilds(childs + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Row:3 Infants */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: 'grey'}}>Ages 2 or below</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>{infants}</Text>
            <TouchableOpacity
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.searchButton}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {screen: 'SearchResults'},
          })
        }>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customers;
