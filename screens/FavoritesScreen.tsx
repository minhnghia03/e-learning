import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { courses } from '../assets/data/course';
import CourseList from '../components/CourseList';
import { useAppSettings } from '../components/AppSettingsContext';

export default function FavoritesScreen() {
  const { favoriteCourses } = useAppSettings();

  const getFilteredCourses = useCallback(() => {
    return courses.filter((course) => favoriteCourses.includes(course.id));
  }, [favoriteCourses]);

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="mb-4 pt-8 text-xl font-bold text-gray-800">Yêu thích</Text>
      </View>
      <CourseList courses={getFilteredCourses()} selectedCategory={null} />
      {getFilteredCourses().length === 0 && (
        <View className="flex-1 items-center justify-center py-8">
          <Text className="text-base text-gray-500">Bạn chưa có khóa học yêu thích nào.</Text>
        </View>
      )}
    </View>
  );
}
