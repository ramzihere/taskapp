import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({children, style, onPress}) => {
  let CardComponent = View;

  if (onPress) {
    CardComponent = TouchableOpacity;
  }
  return (
    <CardComponent
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.card, ...style}}>
      {children}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
});

export default Card;
