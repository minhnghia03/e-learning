import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../../theme';

const labelClass = 'flex-1 text-base font-semibold text-darkGrayText';

const FONT_SIZE_OPTIONS = [
  { label: 'Nhỏ', value: 14 },
  { label: 'Vừa', value: 16 },
  { label: 'Lớn', value: 20 },
];

export default function GeneralSettings({
  fontSize,
  setFontSize,
  volume,
  setVolume,
  darkMode,
  setDarkMode,
  enableNotifications,
  setEnableNotifications,
  onBack,
}: any) {
  return (
    <View className="flex-1">
      <TouchableOpacity className="mb-6 flex-row items-center" onPress={onBack}>
        <ArrowLeftIcon size={24} color={themeColors.bgPurple} className="mr-2" />
        <Text className="text-lg font-semibold text-bgPurple">Chung</Text>
      </TouchableOpacity>
      {/* Font Size Dropdown */}
      <View className="mb-6 flex-row items-center justify-between">
        <Text className={labelClass}>Cỡ chữ</Text>
        <View className="flex-row items-center justify-end space-x-2">
          {FONT_SIZE_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option.value}
              className={`rounded-lg border px-3 py-1 ${fontSize === option.value ? 'border-bgPurple bg-bgPurple' : 'border-gray-300 bg-white'}`}
              onPress={() => setFontSize(option.value)}>
              <Text
                className={`${fontSize === option.value ? 'font-bold text-bgWhite' : 'text-darkGrayText'}`}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Volume */}
      <View className="mb-6 flex-row items-center justify-between">
        <Text className={labelClass}>Âm lượng</Text>
        <View className="flex-row items-center justify-end">
          <TouchableOpacity
            onPress={() => setVolume((v: number) => Math.max(0, v - 10))}
            className="p-2">
            <Text className="text-xl text-bgPurple">-</Text>
          </TouchableOpacity>
          <Text className="mx-2 w-8 text-center text-lg font-bold text-bgPurple">{volume}</Text>
          <TouchableOpacity
            onPress={() => setVolume((v: number) => Math.min(100, v + 10))}
            className="p-2">
            <Text className="text-xl text-bgPurple">+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Toggles */}
      <View className="mb-6 flex-row items-center justify-between">
        <Text className={labelClass}>Chế độ tối</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ true: themeColors.bgPurple, false: '#ccc' }}
        />
      </View>
      <View className="mb-6 flex-row items-center justify-between">
        <Text className={labelClass}>Bật thông báo</Text>
        <Switch
          value={enableNotifications}
          onValueChange={setEnableNotifications}
          trackColor={{ true: themeColors.bgPurple, false: '#ccc' }}
        />
      </View>
    </View>
  );
}
