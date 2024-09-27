import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config'
import { useCounterState } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

  const count = useCounterState(state => state.count);
  const incrementBy = useCounterState(state => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`
    })
  }, [ count ])
  

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Count: {count}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(1)}
      >
        <Text>+ 1</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(-1)}
      >
        <Text>- 1</Text>
      </Pressable>
    </View>
  )
}
