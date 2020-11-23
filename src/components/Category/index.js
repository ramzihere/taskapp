import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

const Category = ({name, image}) => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.category}>
        <Image source={image} />
      </View>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Category;
