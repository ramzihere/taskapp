import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 160,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weight: {
    backgroundColor: '#B02E46',
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Roboto-Bold',
    padding: 2,
    borderRadius: 2,
  },
  image: {
    width: 100,
    height: 85,
    resizeMode: 'cover',
  },
  name: {
    color: '#6E7989',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  price: {
    color: '#B02E46',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
