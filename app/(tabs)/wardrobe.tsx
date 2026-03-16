import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { sampleClothingItems } from "@/data/Sampledata";
import { Category } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Dimensions, FlatList, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get('window');
const numColumns = 2;
const itemWidth = (width - 30) / numColumns;

const categories: Category[] = ['All', 'Upperbody', 'Lowerbody', 'Shoes', 'Accessories', 'Other'];

export default function App() {

const [selectedCategory, setSelectedCategory] = useState('All');
const filteredClothingItems = sampleClothingItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

const colorScheme = useColorScheme();
const colors = Colors[colorScheme ?? 'light'];

  return (
    <FlatList
      data={filteredClothingItems}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      ListHeaderComponent={
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginRight: -10 }}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={{
                padding: 10,
                margin: 5,
                marginBottom: 20,
                borderRadius: 20,
                backgroundColor: selectedCategory === category ? colors.tint : colors.chipBackground,
              }}
              >
                <Text style={{ color: selectedCategory === category ? colors.background : colors.tint, fontWeight: 'bold', marginHorizontal: 8, marginVertical: 2 }}>
                  {category}
                </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 5, marginVertical: 10, overflow: 'hidden' }}>
          <ImageBackground
            source={{ uri: item.imageUri }}
            style={{ width: itemWidth, height: 200 }}
            borderRadius={10}

          >
            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 1)']} style={{ flex: 1, justifyContent: 'flex-end', padding: 5, position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: 10 }}>
              <Text style={{ color: colors.text, fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: colors.tabIconDefault, textAlign: 'center', marginBottom: 10, fontSize: 12 }}>
                {item.category}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      )}
    />
  );
}
