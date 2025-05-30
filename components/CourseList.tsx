import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import {
  BookOpenIcon,
  ClockIcon,
  HeartIcon as HeartOutlineIcon,
} from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolidIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSettings } from './AppSettingsContext';

interface Course {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: string;
  categoryId: number;
  chapters?: {
    id: number;
    title: string;
  }[];
}

interface Category {
  id: number;
  name: string;
}

interface CourseListProps {
  courses: Course[];
  selectedCategory: Category | null;
}

export default function CourseList({ courses, selectedCategory }: CourseListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { favoriteCourses, setFavoriteCourses } = useAppSettings();

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.categoryId === selectedCategory.id)
    : courses;

  const toggleFavorite = (courseId: number) => {
    if (favoriteCourses.includes(courseId)) {
      setFavoriteCourses(favoriteCourses.filter((id) => id !== courseId));
    } else {
      setFavoriteCourses([...favoriteCourses, courseId]);
    }
  };

  const renderCourseItem = ({ item }: { item: Course }) => {
    const isFavorite = favoriteCourses.includes(item.id);
    return (
      <TouchableOpacity
        className="mb-4 w-[48%] overflow-hidden rounded-2xl bg-white shadow-sm"
        onPress={() => navigation.navigate('CourseDetail', { course: item })}>
        <Image
          source={{ uri: item.thumbnail }}
          className="h-32 w-full rounded-t-2xl"
          resizeMode="cover"
        />
        <View className="p-2">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-xs font-medium text-bgPurple">{item.name}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} hitSlop={10}>
              {isFavorite ? (
                <HeartSolidIcon size={20} color="#F43F5E" />
              ) : (
                <HeartOutlineIcon size={20} color="#F43F5E" />
              )}
            </TouchableOpacity>
          </View>
          <Text className="mb-2 text-sm font-semibold text-gray-800" numberOfLines={2}>
            {item.title}
          </Text>
          <View className="flex-row items-center">
            <View className="mr-2 flex-row items-center">
              <BookOpenIcon size={14} color="#6B7280" />
              <Text className="ml-1 text-xs text-gray-500">{item.chapters?.length || 0}</Text>
            </View>
            <View className="flex-row items-center">
              <ClockIcon size={14} color="#6B7280" />
              <Text className="ml-1 text-xs text-gray-500">2h</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={filteredCourses}
      renderItem={renderCourseItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerClassName="px-4 pt-2"
      className="flex-1"
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center py-8">
          <Text className="text-base text-gray-500">
            {selectedCategory
              ? `Không tìm thấy khóa học nào trong danh mục ${selectedCategory.name}`
              : 'Không tìm thấy khóa học nào'}
          </Text>
        </View>
      }
    />
  );
}
