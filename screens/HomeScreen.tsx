import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {
  MagnifyingGlass,
  Calculator,
  Beaker,
  BookOpen,
  Clock,
  GlobeAlt,
  Language,
  ComputerDesktop,
  AcademicCap,
  Leaf,
} from 'react-native-heroicons/outline';

import { categories } from '../assets/data/course';

interface Category {
  id: number;
  name: string;
}

type IconComponent = (props: { size?: number; color?: string }) => JSX.Element;
interface IconMap {
  [key: string]: IconComponent;
}

export default function HomeScreen() {
  const getCategoryIcon = (categoryName: string): IconComponent => {
    const icons: IconMap = {
      Toán: Calculator,
      'Vật lý': Beaker,
      'Hóa học': Beaker,
      'Sinh học': Leaf,
      'Ngữ văn': BookOpen,
      'Lịch sử': Clock,
      'Địa lý': GlobeAlt,
      'Tiếng Anh': Language,
      'Tin học': ComputerDesktop,
    };
    return icons[categoryName] || AcademicCap;
  };

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const IconComponent = getCategoryIcon(item.name);
    return (
      <TouchableOpacity className="mb-4 w-[48%] items-center rounded-xl bg-gray-50 p-4">
        <View className="mb-2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <IconComponent size={24} color="#374151" />
        </View>
        <Text className="text-center text-sm font-semibold text-gray-800">{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white p-4">
      <TouchableOpacity className="mb-5 flex-row items-center rounded-lg bg-gray-100 p-3">
        <MagnifyingGlass size={20} color="#6B7280" />
        <Text className="ml-2 text-base text-gray-500">Tìm kiếm khóa học...</Text>
      </TouchableOpacity>

      <Text className="mb-4 text-xl font-bold text-gray-800">Danh mục khóa học</Text>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
