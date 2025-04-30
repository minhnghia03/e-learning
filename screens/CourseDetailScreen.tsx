import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackButton from 'components/BackButton';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon } from 'react-native-heroicons/outline';

interface Chapter {
  id: number;
  title: string;
  videoUrl?: string;
  content?: string;
}

interface Course {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: string;
  categoryId: number;
  chapters?: Chapter[];
}

type CourseDetailScreenProps = {
  route: {
    params: {
      course: Course;
    };
  };
};

export default function CourseDetailScreen({ route }: CourseDetailScreenProps) {
  const { course } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const renderChapter = ({ item, index }: { item: Chapter; index: number }) => (
    <TouchableOpacity
      className="mb-3 rounded-lg bg-white p-4 shadow-sm"
      onPress={() =>
        navigation.navigate('ChapterDetail', {
          chapter: item,
          course,
          chapterIndex: index,
          totalChapters: course.chapters?.length || 0,
        })
      }>
      <View className="flex-row items-center">
        <View className="mr-4 h-8 w-8 items-center justify-center rounded-full bg-bgPurple/10">
          <Text className="text-sm font-semibold text-bgPurple">{index + 1}</Text>
        </View>
        <Text className="flex-1 text-base font-medium text-gray-800">{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View className="relative h-56">
          <Image source={{ uri: course.thumbnail }} className="h-full w-full" resizeMode="cover" />
          <View className="absolute left-4 top-12">
            <BackButton />
          </View>
        </View>

        {/* Course Info */}
        <View className="p-4">
          <Text className="mb-1 text-sm font-medium text-bgPurple">{course.name}</Text>
          <Text className="mb-2 text-xl font-bold text-gray-800">{course.title}</Text>

          <View className="mb-4 flex-row items-center">
            <View className="mr-4 flex-row items-center">
              <BookOpenIcon size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-600">
                {course.chapters?.length || 0} chương
              </Text>
            </View>
            <View className="flex-row items-center">
              <ClockIcon size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-600">2h</Text>
            </View>
          </View>

          <Text className="mb-6 text-base leading-6 text-gray-600">{course.description}</Text>

          {/* Chapters Section */}
          <Text className="mb-4 text-lg font-bold text-gray-800">Nội dung khóa học</Text>
          {course.chapters && course.chapters.length > 0 ? (
            <FlatList
              data={course.chapters}
              renderItem={renderChapter}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          ) : (
            <Text className="text-base text-gray-500">Chưa có nội dung cho khóa học này</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
