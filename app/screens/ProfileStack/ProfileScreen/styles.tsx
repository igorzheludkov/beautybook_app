import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  },
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 100
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center'
  },
  skillsTitle: {
    padding: 10,
    fontSize: 18
  },
  skillsSubTitle: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 13
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  avatarWrapper: { alignItems: 'center' },
  profileForm: { paddingBottom: 20 }
})

export default styles
