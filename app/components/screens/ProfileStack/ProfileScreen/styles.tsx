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
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center'
  },
  skillsTitle: {
    padding: 10,
    fontSize: 18
  }
})

export default styles
