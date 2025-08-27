import { SafeAreaView, Text } from 'react-native'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth layout</Text>
      <Slot />
    </SafeAreaView>
  )
}
