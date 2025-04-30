import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {
  CalculatorIcon,
  BeakerIcon,
  BookOpenIcon,
  ClockIcon,
  GlobeAltIcon,
  LanguageIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
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

interface CategoryListProps {
  onSelectCategory?: (category: Category) => void;
}

export default function CategoryList({ onSelectCategory }: CategoryListProps) {
  const getCategoryIcon = (categoryName: string): IconComponent => {
    const icons: IconMap = {
      Toán: CalculatorIcon,
      'Vật lý': BeakerIcon,
      'Hóa học': BeakerIcon,
      'Sinh học': BeakerIcon,
      'Ngữ văn': BookOpenIcon,
      'Lịch sử': ClockIcon,
      'Địa lý': GlobeAltIcon,
      'Tiếng Anh': LanguageIcon,
      'Tin học': ComputerDesktopIcon,
    };
    return icons[categoryName] || AcademicCapIcon;
  };

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const IconComponent = getCategoryIcon(item.name);
    return (
      <TouchableOpacity
        className="mb-4 w-[48%] items-center rounded-xl bg-gray-50 p-4"
        onPress={() => onSelectCategory?.(item)}>
        <View className="mb-2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <IconComponent size={24} color="#374151" />
        </View>
        <Text className="text-center text-sm font-semibold text-gray-800">{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerClassName="px-4"
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}
