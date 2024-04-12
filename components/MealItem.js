import { View, Text, Image, StyleSheet } from "react-native";

function MealItem({ title, imgUrl, duration, complexity, affordability }) {
  return (
    <>
      <View>
        <Image source={{ uri: imgUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text>{duration}</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
      </View>
    </>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
