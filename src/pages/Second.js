import React from 'react'
import { View,Text,Button} from 'react-native'
const Second = ({navigation,route}) => {
  const user = route.params.username;
  return (
    <View>
      <Text>Second</Text>
      <Text>{user}</Text>
      <Button title='go to first' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default Second;