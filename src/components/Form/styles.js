import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginForm: {
    // flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    borderRadius: 35,
    borderBottomLeftRadius: 120,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  forgotButtonText: {
    fontSize: 12,
    color: '#636363',
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Medium',
  },
  loginButton: {
    backgroundColor: '#B02E46',
    height: 49,
    width: 49,
    borderRadius: 49,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 2,
  },
});
