import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerStyle: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'normal',
    fontFamily: 'Roboto-Medium',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 20,
    alignItems: 'center',
    right: 18,
    bottom: 5,
  },
});
