import React from 'react';
import {FlatList} from 'react-native';

import Product from '../Product';

const ProductList = ({data}) => {
  return (
    <FlatList
      contentContainerStyle={{paddingHorizontal: 15}}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Product
          weight={item.weight}
          liked={item.liked}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default ProductList;
