import {Text, View} from 'react-native'

function Loading() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
        <Text className="bg-primary text-secondary font-primary text-4xl py-4 px-6 rounded-xl border-b-8 border-secondary">Loading...</Text>
    </View>
  )
}

export default Loading