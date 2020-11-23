import React from 'react';
import {View, Text, Image} from 'react-native';

import Card from '../Card';
import {styles} from './styles';

const Product = ({weight, liked, image, name, price}) => {
  return (
    <Card style={styles.productContainer}>
      <View style={styles.header}>
        <Text style={styles.weight}>{weight}</Text>
        {liked ? (
          <Image source={require('../../assets/filedHeart.png')} />
        ) : (
          <Image source={require('../../assets/heart.png')} />
        )}
      </View>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Rs. {price}</Text>
    </Card>
  );
};

export default Product;
