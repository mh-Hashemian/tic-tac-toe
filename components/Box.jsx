import { Text, View } from "react-native"

const Box = ({ title, text, ...props }) => {
    return (
        <View {...props} className="rounded-xl w-1/3 mx-1 py-3 items-center">
            <Text className="text-xl text-background font-primary">{title}</Text>
            <Text className="text-4xl text-background font-primary font-extrabold">{text}</Text>
        </View>
    )
}

export default Box