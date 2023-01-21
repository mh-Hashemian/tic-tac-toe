import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Home, Loading } from "./screens/";

export default function App() {
  const [fontsLoaded] = useFonts({
    "oswald-regular": require("./assets/fonts/Oswald-Regular.ttf"),
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <View className="flex-1 bg-background pt-12 px-10">
      <Home />
    </View>
  );
}
