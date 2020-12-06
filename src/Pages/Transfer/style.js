import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: '700',
  },
  searchInput: {
    margin: 14,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  quickAccess: {
    flexDirection: 'column',
    padding: 10,
    marginTop: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  contentSearch: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
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

    elevation: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 40,
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
});
export default style;
