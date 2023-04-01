import { StyleSheet } from 'react-native'
import colors from '../../../../config/colors'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  },
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 100,
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center'
  },
  skillsTitle: {
    padding: 10,
    fontSize: 18
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default styles
