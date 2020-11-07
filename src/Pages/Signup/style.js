import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6379F4',
    marginVertical: 50,
    marginBottom: 60,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6379F4',
    padding: 10,
    marginTop: 30,
    margin: 10,
    borderRadius: 10,
  },
  containerMenu: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,
    // elevation: 8,
  },
  signup: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  message: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#3A3D42',
  },
  messageButton: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 50,
    marginTop: 20,
  },
  inputMenu: {
    backgroundColor: 'transparent',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
});
export default style;
