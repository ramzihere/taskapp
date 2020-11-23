import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const ProductTypes = ({type, icon, onSubmit}) => {
  return (
    <View style={styles.productTypes}>
      <View style={styles.productTypesContainer}>
        <Text style={styles.title}>{type}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSubmit}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>View all</Text>
          <Image style={{marginLeft: 10}} source={icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductTypes;
