import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
const tikla=()=>{
router.replace({
  pathname:"/anasayfa"
})

}

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={tikla}>
        <Text style={styles.title}>Englisch Pratic</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 28,
    backgroundColor:"yellow"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
