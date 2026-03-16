export type Category = 'All' | 'Upperbody' | 'Lowerbody' | 'Shoes' | 'Accessories' | 'Other';

export type Occasion = 'Casual' | 'Formal' | 'Sport' | 'Party' | 'Beach' | 'Work' | 'Other';

export interface ClothingItem {
  id: string;
  name: string;
  category: Exclude<Category, 'All'>;
  occasion: Occasion;
  color: string;
  imageUri: string;
}

///To be implemented in the future, will likely include an array of ClothingItem ids and a name.
