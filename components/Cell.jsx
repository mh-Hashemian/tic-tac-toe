import { Text, TouchableOpacity, View } from "react-native"

import Icons from "./Icons"

const Cell = ({ value = "", mark, position }) => {
    const pressHandler = () => {
        mark(position)
    }

  return (
    <TouchableOpacity onPress={pressHandler}>
        <View className="bg-secondary w-20 h-20 m-2 pt-1 items-center rounded-xl border-b-8 border-b-[#10212a]">
            {!value && null}
            {value && (value === "X" ? (<Icons.XIcon size={65} />) : (<Icons.OIcon size={65} />))}
        </View>
    </TouchableOpacity>
  )
}

export default Cell