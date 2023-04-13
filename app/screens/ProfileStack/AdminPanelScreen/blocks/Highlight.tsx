import { StyleSheet, View, TextInput } from 'react-native'
import colors from '../../../../constants/colors'
import { Button } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { Highlight } from '../../../../models/IProfileForm'
import objectEqualityCheck from '../../../../utils/objectEqualityCheck'

interface IProps {
  values: Highlight | undefined
  onUpdateHighlight: (data: Highlight) => void
  isLoadingUpdate: boolean
}

export default function Hightlight(props: IProps) {
  const [state, setState] = useState<Highlight>({ title: '', description: '' })

  useEffect(() => {
    props.values && setState(props.values)
  }, [props.values])

  const isDirty = objectEqualityCheck(props.values, state)

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.title}
        value={state?.title}
        onChangeText={(value: string) => setState((prev) => ({ ...prev, title: value }))}
        placeholder='Заголовок'
      />
      <TextInput
        style={styles.text}
        value={state?.description}
        onChangeText={(value: string) => setState((prev) => ({ ...prev, description: value }))}
        placeholder='Опис'
        multiline
      />
      {isDirty && (
        <Button loading={props.isLoadingUpdate} onPress={() => props.onUpdateHighlight(state)}>
          Зберегти
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { padding: 5, borderRadius: 5, backgroundColor: colors.palette.pinkLight },
  title: { fontSize: 16, fontWeight: '600', },
  text: { fontSize: 14,  },
  button: {}
})
