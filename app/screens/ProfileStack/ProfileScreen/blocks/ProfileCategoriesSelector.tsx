import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Checkbox from '../../../../components/atoms/Checkbox'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../../../../constants/colors'
import { IServicesCategories } from '../../../../models/IServicesCategories'
import { ISkillsItem } from '../../../../models/IProfileForm'

interface IProps {
  data: IServicesCategories[] | undefined
  onCheckedChange: (arg0: ISkillsItem[] | []) => void
  checkedItems: ISkillsItem[] | []
}

const ProfileCategoriesSelector = ({ data, onCheckedChange, checkedItems }: IProps) => {
  const [checkedSkills, setCheckedSkills] = useState<ISkillsItem[] | []>([])

  console.log('~~~~~~~~~~~~~~ checkedSkills', checkedSkills)

  useEffect(() => {
    checkedItems.length && setCheckedSkills(checkedItems)
  }, [checkedItems])

  const handleCheckedChange = (checkbox: ISkillsItem) => {
    const newCheckedIds = [...checkedSkills]
    const index = newCheckedIds.findIndex((item) => item.id === checkbox.id)
    if (index === -1) {
      newCheckedIds.push({ id: checkbox.id, title: checkbox.title })
    } else {
      newCheckedIds.splice(index, 1)
    }
    setCheckedSkills(newCheckedIds)
    onCheckedChange(newCheckedIds)
  }

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      {data?.map((rootItem: IServicesCategories) => (
        <React.Fragment key={rootItem.id}>
          <Checkbox
            containerStyle={styles.firstLevel}
            key={`checkbox-${rootItem.id}`}
            label={rootItem.title}
            checked={checkedSkills.some((item) => item.id === rootItem.id)}
            onPress={() => handleCheckedChange(rootItem)}
          />
          {checkedSkills.some((level_0) => level_0.id === rootItem.id) &&
            rootItem.subCategories?.map((level_2) => (
              <View style={styles.level_2} key={`view-${rootItem.id}-${level_2.id}`}>
                <Checkbox
                  containerStyle={styles.secondLevel}
                  key={`checkbox-${rootItem.id}-${level_2.id}`}
                  label={level_2.title}
                  checked={checkedSkills.some((item) => item.id === level_2.id)}
                  onPress={() => handleCheckedChange(level_2)}
                />
                {checkedSkills.some((level_3) => level_3.id === level_2.id) &&
                  level_2.subCategories?.map((level_3) => (
                    <View style={styles.level_3} key={`view-${rootItem.id}-${level_2.id}-${level_3.id}`}>
                      <Checkbox
                        containerStyle={styles.thirdLevel}
                        key={`checkbox-${rootItem.id}-${level_2.id}-${level_3.id}`}
                        label={level_3.title}
                        checked={checkedSkills.some((item) => item.id === level_3.id)}
                        onPress={() => handleCheckedChange(level_3)}
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
