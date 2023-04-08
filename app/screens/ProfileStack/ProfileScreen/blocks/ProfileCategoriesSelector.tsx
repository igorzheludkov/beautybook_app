import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Checkbox from '../../../../components/atoms/Checkbox'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../../../../constants/colors'

interface IProps {
  data: any
  onCheckedChange: (checked: Checked) => void
  checkedItems: string[]
}

type Checked = string[]

interface Category {
  id: string
  title: string
  description: string
  image: string
  subCategories: Category[]
}

const ProfileCategoriesSelector = ({ data, onCheckedChange, checkedItems }: IProps) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([])

  useEffect(() => {
    checkedItems.length && setCheckedIds(checkedItems)
  }, [checkedItems])

  const handleCheckedChange = (id: string) => {
    const newCheckedIds = [...checkedIds]
    const index = newCheckedIds.indexOf(id)
    if (index === -1) {
      newCheckedIds.push(id)
    } else {
      newCheckedIds.splice(index, 1)
    }
    setCheckedIds(newCheckedIds)
    onCheckedChange(newCheckedIds)
  }

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      {data?.map(({ id, title, subCategories }: Category) => (
        <React.Fragment key={id}>
          <Checkbox
            containerStyle={styles.firstLevel}
            key={`checkbox-${id}`}
            label={title}
            checked={checkedIds.includes(id)}
            onPress={() => handleCheckedChange(id)}
          />
          {checkedIds.some((level_0) => level_0 === id) &&
            subCategories?.map((level_2) => (
              <View style={styles.level_2} key={`view-${id}-${level_2.id}`}>
                <Checkbox
                  containerStyle={styles.secondLevel}
                  key={`checkbox-${id}-${level_2.id}`}
                  label={level_2.title}
                  checked={checkedIds.includes(level_2.id)}
                  onPress={() => handleCheckedChange(level_2.id)}
                />
                {checkedIds.some((level_3) => level_3 === level_2.id) &&
                  level_2.subCategories?.map((level_3) => (
                    <View style={styles.level_3} key={`view-${id}-${level_2.id}-${level_3.id}`}>
                      <Checkbox
                        containerStyle={styles.thirdLevel}
                        key={`checkbox-${id}-${level_2.id}-${level_3.id}`}
                        label={level_3.title}
                        checked={checkedIds.includes(level_3.id)}
                        onPress={() => handleCheckedChange(level_3.id)}
                      />
                    </View>
                  ))}
              </View>
            ))}
        </React.Fragment>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  categories: {},
  level_2: { marginLeft: 20 },
  level_3: { marginLeft: 30 },
  firstLevel: { flex: 1 },
  secondLevel: { flex: 1, paddingVertical: 5, backgroundColor: colors.palette.blueLight },
  thirdLevel: { flex: 1, paddingVertical: 0, backgroundColor: colors.palette.yellowLight }
})

export default ProfileCategoriesSelector
