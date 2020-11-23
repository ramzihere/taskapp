import React from 'react';
import {View, Text, Image, FlatList, StatusBar} from 'react-native';

import Category from '../../components/Category';
import Card from '../../components/Card';
import ProductList from '../../components/ProductList';
import ProductTypes from '../../components/ProductTypes';

import {data} from '../../data';
import {styles} from './styles';

import eggs from '../../assets/eggs.png';
import onion from '../../assets/onion.png';
import bottle from '../../assets/bottle.png';
import meat from '../../assets/meat.png';
import icon from '../../assets/icon.png';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#A1233A" />
      <Card style={styles.allCategories}>
        <Text style={styles.title}>All Categories</Text>
        <View style={styles.categoriesConatiner}>
          <Category name="Eggs" image={eggs} />
          <Category name="Meat" image={meat} />
          <Category name="Vegetables" image={onion} />
          <Category name="Ghee" image={bottle} />
        </View>
      </Card>

      <ProductTypes type="Featured Products" icon={icon} onSubmit={() => {}} />
      <ProductList data={data} />

      <ProductTypes type="New Products" icon={icon} onSubmit={() => {}} />
      <ProductList data={data} />
    </View>
  );
};

export default HomeScreen;
