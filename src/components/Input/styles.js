import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  labelContainer: {
    marginTop: 15,
    marginBottom: 5,
  },
  labelText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#636363',
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Medium',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomColor: '#C5CAD1',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
});
