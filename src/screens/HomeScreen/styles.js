import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  allCategories: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    color: '#102134',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  categoriesConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
