import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#B02E46',
  },
  container: {
    flex: 1,
    backgroundColor: '#B02E46',
    margin: 20,
  },

  optional: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 15,
  },
  optionalText: {
    color: '#F3F3F3',
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Regular',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  accountText: {
    color: '#F3F3F3',
    fontSize: 14,
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Medium',
  },
});
