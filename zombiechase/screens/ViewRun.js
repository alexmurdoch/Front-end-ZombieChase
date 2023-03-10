import { RunView } from "../component/RunView";
import { View, Text, ImageBackground } from "react-native";
import Background from "../assets/Background.png";
export default function ViewRun({ route }) {
  const {
    run_data: { time, runData, caught, zombieRoute },
    created_at,
  } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={{ flex: 1, paddingTop: 44 }}
      >
        <Text style={{ color: "white", textAlign: "right", marginRight: 15 }}>
          {created_at.slice(0, 10)}
        </Text>
        <RunView
          counter={time}
          caught={caught}
          zombieRoute={zombieRoute}
          runData={runData}
        />
      </ImageBackground>
    </View>
  );
}
