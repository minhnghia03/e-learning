import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="rounded-full bg-white/30 p-2 p-2 backdrop-blur-md">
      <ArrowLeftIcon size={24} color="#5667FD" />
    </TouchableOpacity>
  );
}
