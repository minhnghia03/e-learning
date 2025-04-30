import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowLeftIcon, BookOpenIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ResizeMode, Video } from 'expo-av';

interface Chapter {
  id: number;
  title: string;
  description?: string;
  type: 'text' | 'video';
  content: string;
}

interface Course {
  id: number;
  name: string;
  title: string;
}

type ChapterDetailScreenProps = {
  route: {
    params: {
      chapter: Chapter;
      course: Course;
      chapterIndex: number;
      totalChapters: number;
    };
  };
};

const { width } = Dimensions.get('window');
const videoHeight = (width * 9) / 16; // 16:9 aspect ratio

export default function ChapterDetailScreen({ route }: ChapterDetailScreenProps) {
  const { chapter, course, chapterIndex, totalChapters } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const renderContent = () => {
    if (chapter.type === 'video') {
      return (
        <View className="rounded-lg bg-gray-50 p-4">
          <Text className="text-center text-base text-gray-500">
            Video content: {chapter.content}
          </Text>
        </View>
      );
    }
    return <Text className="text-base leading-7 text-gray-600">{chapter.content}</Text>;
  };

  return (
    <View className="flex-1 bg-white">
      {/* Video Section */}
      <View style={{ height: videoHeight }} className="relative bg-black">
        {chapter.type === 'video' ? (
          <Video
            source={{ uri: chapter.content }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={false}
            useNativeControls
            style={{ flex: 1 }}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white">Bài học dạng văn bản</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-4 top-12 rounded-full bg-white/30 p-2 backdrop-blur-md">
          <ArrowLeftIcon size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Course Info */}
          <View className="mb-4 flex-row items-center justify-between">
            <View>
              <Text className="mb-1 text-sm font-medium text-bgPurple">{course.name}</Text>
              <Text className="text-lg font-bold text-gray-800">{course.title}</Text>
            </View>
            <View className="flex-row items-center">
              <BookOpenIcon size={16} color="#6B7280" />
              <Text className="ml-1 text-sm text-gray-600">
                {chapterIndex + 1}/{totalChapters}
              </Text>
            </View>
          </View>

          {/* Chapter Title */}
          <Text className="mb-2 text-xl font-bold text-gray-800">{chapter.title}</Text>
          {chapter.description && (
            <Text className="mb-6 text-base text-gray-500">{chapter.description}</Text>
          )}

          {/* Chapter Content */}
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  );
}
