import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackButton from 'components/BackButton';
import { ResizeMode, Video } from 'expo-av';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { ArrowLeftIcon, ClockIcon } from 'react-native-heroicons/outline';

interface Chapter {
  id: number;
  title: string;
  description?: string;
  textContent: string;
  videoUrl: string;
}

interface Course {
  id: number;
  name: string;
  title: string;
  chapters?: Chapter[];
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
const videoHeight = width * 0.5625; // Back to 16:9 aspect ratio for full-width video

export default function ChapterDetailScreen({ route }: ChapterDetailScreenProps) {
  const { chapter, course, chapterIndex, totalChapters } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateToChapter = (targetIndex: number) => {
    if (course.chapters && targetIndex >= 0 && targetIndex < course.chapters.length) {
      navigation.navigate('ChapterDetail', {
        chapter: course.chapters[targetIndex],
        course,
        chapterIndex: targetIndex,
        totalChapters,
      });
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <SafeAreaView className="bg-white">
        <View className="h-16 flex-row items-center px-4">
          <View className="z-10">
            <BackButton />
          </View>

          <Text
            className="-ml-8 flex-1 text-center text-lg font-medium text-gray-800"
            numberOfLines={1}>
            {chapter.title}
          </Text>
        </View>
      </SafeAreaView>

      {/* Video Section - Outside ScrollView for full width */}
      <View className="w-full bg-white" style={{ height: videoHeight, width: '100%' }}>
        {chapter.videoUrl ? (
          <Video
            source={{
              uri: chapter.videoUrl,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={false}
            useNativeControls
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <View className="flex-1 items-center justify-center bg-gray-100">
            <Text className="text-gray-500">Video không khả dụng</Text>
          </View>
        )}
      </View>

      {/* Content Section */}
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="px-6 pt-4">
          {/* Chapter Info */}
          <View className="mb-6 flex-row items-center">
            <Text className="text-base text-gray-500">Bài {chapterIndex + 1}</Text>
            <View className="mx-2 h-1 w-1 rounded-full bg-gray-300" />
            <View className="flex-row items-center">
              <ClockIcon size={16} color="#6B7280" />
              <Text className="ml-1 text-base text-gray-500">5 phút</Text>
            </View>
          </View>

          {/* Chapter Description */}
          {chapter.description && (
            <Text className="mb-4 text-base text-gray-600">{chapter.description}</Text>
          )}

          {/* Chapter Content */}
          <Text className="text-base leading-relaxed text-gray-600">{chapter.textContent}</Text>
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View className="flex-row border-t border-gray-200 bg-white px-4 py-4">
        <TouchableOpacity
          onPress={() => navigateToChapter(chapterIndex - 1)}
          disabled={chapterIndex === 0}
          className={`flex-1 flex-row items-center ${chapterIndex === 0 ? 'opacity-50' : ''}`}>
          <Text className="text-base font-medium text-bgPurple">← Bài trước</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToChapter(chapterIndex + 1)}
          disabled={chapterIndex === totalChapters - 1}
          className={`flex-1 flex-row items-center justify-end ${
            chapterIndex === totalChapters - 1 ? 'opacity-50' : ''
          }`}>
          <Text className="text-base font-medium text-bgPurple">Bài tiếp theo →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
