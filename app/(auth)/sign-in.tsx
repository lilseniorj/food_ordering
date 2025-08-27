import { Button, Text, View } from 'react-native';
import { router } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title='Sign Up' onPress={() => router.push("/sign-up")}/>
    </View>
  )
}

export default SignIn;
