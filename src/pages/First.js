import React from 'react'
import { View,Text,Button } from 'react-native'
const First = (props) => {
console.log(props)

const navigateToPage =()=>{
props.navigation.navigate('Second',{
  username:'asuman güven'
})
}
  return (
    <View>
      <Text>First</Text>
      <Button title='go to second' onPress={navigateToPage}/>
    </View>
  )
}

export default First;