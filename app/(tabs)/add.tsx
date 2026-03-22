import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Category, Occasion } from "@/types";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Feather from '@expo/vector-icons/Feather';

const categories: Category[] = ['Upperbody', 'Lowerbody', 'Shoes', 'Accessories', 'Other'];
const clothcolors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Grey', 'Pink', 'Purple', 'Brown'];
const occasions: Occasion[] = ['Casual', 'Formal', 'Sport', 'Party', 'Beach', 'Work', 'Other'];

export default function TabTwoScreen() {

  const [selectedimageUri, setSelectedImageUri] = useState('');
  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const insets = useSafeAreaInsets();

  const handleSave = () => {
    if (!selectedCategory || !selectedColor || !selectedOccasion) {
      Alert.alert('Error', 'Please fill in Category, Color, and Occasion before saving.');
      return;
    }
    Alert.alert('Saved', 'Clothing item has been saved to Drobe!');
  };

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 69 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, paddingTop: insets.top + 20, color: colors.tabIconSelected }}>
          Add Cloth
        </Text>

        {selectedimageUri ? (
          <>
          <Image source={{ uri: selectedimageUri }} style={{ width: '100%', height: 400, marginTop: 20, borderRadius: 20 }} />

          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold', color: colors.tabIconSelected }}>
            Name
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter a descriptive name for the item"
            placeholderTextColor={colors.placeholderTextColor}
            style={{ borderWidth: 1, borderColor: colors.tabIconDefault, color: colors.text, borderRadius: 10, padding: 10, marginTop: 10 }}
          />

          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold', color: colors.tabIconSelected }}>
            Category
          </Text>
          <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
            {categories.map((category) => (
              <View key={category}>
                <Text
                  onPress={() => setSelectedCategory(category)}
                  style={{
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: selectedCategory === category ? colors.tint : colors.chipBackground,
                    color: selectedCategory === category ? colors.background : colors.tint,
                    fontWeight: 'bold',
                    marginHorizontal: 4,
                    marginVertical: 2,
                  }}
                >
                  {category}
                </Text>
              </View>
            ))}
          </View>

          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold', color: colors.tabIconSelected }}>
            Color
          </Text>
          <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
            {clothcolors.map((color) => (
              <View key={color}>
                <TouchableOpacity onPress={() => setSelectedColor(color)}>
                  <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: color.toLowerCase(), margin: 5, 
                    borderWidth: selectedColor === color ? 4 : 2, 
                    borderColor: selectedColor === color ? colors.tint : colors.tabIconDefault, }}>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold', color: colors.tabIconSelected }}>
            Occasions
          </Text>
          <View style={{ marginTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
            {occasions.map((occasion) => (
              <View key={occasion}>
                <Text
                  onPress={() => setSelectedOccasion(occasion)}
                  style={{
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: selectedOccasion === occasion ? colors.tint : colors.chipBackground,
                    color: selectedOccasion === occasion ? colors.background : colors.tint,
                    fontWeight: 'bold',
                    marginHorizontal: 4,
                    marginVertical: 2,
                  }}
                >
                  {occasion}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={{ marginTop: 30, backgroundColor: colors.tint, padding: 15, borderRadius: 10, alignItems: 'center' }}>
            <Text style={{ color: colors.background, fontWeight: 'bold', fontSize: 16 }}
            onPress={() => handleSave()}
            >
              Save to Drobe
            </Text>
          </TouchableOpacity>

          </>
        ) : (
        <>
        <View style={{ width: '100%', height: 500, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, borderColor: colors.tabIconDefault, padding: 20, borderRadius: 10, borderWidth: 1 }}>
          <Feather 
          name="upload" 
          size={50} 
          color= "grey"
          onPress={pickImage}
          />
          <Text style={{ marginTop: 10, color: 'grey' }}>
            From Gallery
          </Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, borderColor: colors.tabIconDefault, padding: 10, marginTop: 20, borderRadius: 10, borderWidth: 1, flexDirection: 'row' }}>
          <Feather 
          name="camera" 
          size={24} 
          color="grey"
          />
          <Text 
          style={{ fontSize: 15, padding: 10, color: 'grey' }}
          onPress={takePhoto}>
          From Camera
          </Text>
        </View>
        </>
        )}
      </ScrollView>
    </View>
  );
}
