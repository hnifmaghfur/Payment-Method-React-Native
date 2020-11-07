import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  midTrans: {
    margin: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
  },
  contentProfile: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 14,
    paddingVertical: 15,
    paddingHorizontal: 5,
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
  button: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: '700',
  },
  quickAccess: {
    flexDirection: 'column',
    padding: 15,
    marginTop: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
export default style;
