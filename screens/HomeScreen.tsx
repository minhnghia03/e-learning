import { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MagnifyingGlassIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';

import { courses } from '../assets/data/course';
import CategoryList from '../components/CategoryList';
import CourseList from '../components/CourseList';

interface Category {
  id: number;
  name: string;
}

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    setIsSearchActive(text.length > 0);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setIsSearchActive(false);
  };

  const getFilteredCourses = useCallback(() => {
    if (searchQuery) {
      return courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return courses;
  }, [searchQuery]);

  const showCourseList = selectedCategory || isSearchActive;
  const headerTitle = selectedCategory
    ? selectedCategory.name
    : isSearchActive
      ? 'Kết quả tìm kiếm'
      : 'Danh mục';

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <View className="mb-4 flex-row items-center pt-8">
          {showCourseList && (
            <TouchableOpacity onPress={handleBack} className="mr-3">
              <ArrowLeftIcon size={24} color="#374151" />
            </TouchableOpacity>
          )}
          <Text className="text-xl font-bold text-gray-800">{headerTitle}</Text>
        </View>

        <View className="mb-5 flex-row items-center rounded-lg bg-gray-100 px-3">
          <MagnifyingGlassIcon size={20} color="#6B7280" />
          <TextInput
            className="flex-1 py-2 pl-2 text-base text-gray-900"
            placeholder="Tìm kiếm khóa học..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      {showCourseList ? (
        <CourseList courses={getFilteredCourses()} selectedCategory={selectedCategory} />
      ) : (
        <CategoryList onSelectCategory={handleSelectCategory} />
      )}
    </View>
  );
}
