import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  // desestructurar todo de una vez puede provocar denders innecesarios ...
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable 
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Antonio Hernandez'})}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable 
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'antonio.hdz@email.com'})}
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable 
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('Jane Smith', 'jane.smith@email.com') }
      >
        <Text>Cambiar a jane</Text>
      </Pressable>
    </View>
  )
}
