import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useUser } from '../components/UserContext';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const { user, setUser } = useUser();
  const navigation = useNavigation();

  const handleLogout = () => {
    setUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 justify-start pt-12">
        <Text className="mb-8 text-2xl font-bold text-darkGrayText">Cài đặt</Text>
        {user && (
          <View className="mb-8 items-center">
            <Image
              source={user.avatar}
              style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }}
            />
            <Text className="text-xl font-semibold text-darkGrayText">{user.name}</Text>
          </View>
        )}
        <TouchableOpacity className="mb-6 rounded-lg bg-bgLightGray p-4">
          <Text className="text-lg text-darkGrayText">Tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-6 rounded-lg bg-bgLightGray p-4">
          <Text className="text-lg text-darkGrayText">Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-12 rounded-lg bg-bgPurple p-4" onPress={handleLogout}>
          <Text className="text-center text-lg text-bgWhite">Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
