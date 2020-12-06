import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  navbar: {
    flexDirection: 'row',
    marginTop: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxBalance: {
    backgroundColor: '#6379F4',
    padding: 30,
    margin: 14,
    borderRadius: 20,
  },
  balanceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FFFFFF',
    borderRadius: 10,
  },
  button: {
    flex: 5,
    elevation: 1,
    borderRadius: 5,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentHistory: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
export default style;
