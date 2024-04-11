import { Pressable, View, Text } from "react-native";
// import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color, onPress }) {
  // const navigation = useNavigation();
  return (
    <View style={{ margin: 20 }}>
      <Pressable onPress={onPress}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
