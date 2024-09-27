import * as React from 'react'; 
import { Text, View } from 'react-native'
import { globalStyles } from '../../../config'
import { useProfileStore } from '../../store/profile-store';
import { useCounterState } from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterState(state => state.count)
  
  return (
  
    <View style={ globalStyles.container }>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>
      <Text style={globalStyles.title}>Count: {count}</Text>
    </View>
  )
}
