import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
