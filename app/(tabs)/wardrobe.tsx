import { sampleClothingItems } from "@/data/Sampledata";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, FlatList, ImageBackground, Text, View } from "react-native";

const { width } = Dimensions.get('window');
const numColumns = 2;
const itemWidth = (width - 30) / numColumns;

export default function App() {
  return (
    <FlatList
      data={sampleClothingItems}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 5, marginVertical: 10, overflow: 'hidden' }}>
          <ImageBackground
            source={{ uri: item.imageUri }}
            style={{ width: itemWidth, height: 200 }}
            borderRadius={10}
          >
            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 1)']} style={{ flex: 1, justifyContent: 'flex-end', padding: 5, position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: '#B8977E', textAlign: 'center', marginBottom: 10, fontSize: 12 }}>
                {item.category}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      )}
    />
  );
}
