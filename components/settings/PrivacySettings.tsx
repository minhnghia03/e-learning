import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../../theme';

export default function PrivacySettings({ onBack }: { onBack: () => void }) {
  return (
    <View className="flex-1">
      <TouchableOpacity className="mb-6 flex-row items-center" onPress={onBack}>
        <ArrowLeftIcon size={24} color={themeColors.bgPurple} className="mr-2" />
        <Text className="text-lg font-semibold text-bgPurple">Quyền riêng tư</Text>
      </TouchableOpacity>
      <Text className="text-base text-darkGrayText">Trang quyền riêng tư (placeholder)</Text>
    </View>
  );
}
