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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  quickAccess: {
    flexDirection: 'column',
    padding: 15,
    marginTop: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  contentSearch: {
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
