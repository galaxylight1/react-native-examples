import { Pressable, View, Text } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={{margin: 20}}>
      <Pressable onPress={onPress}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
