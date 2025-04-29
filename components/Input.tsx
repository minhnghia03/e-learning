import React from 'react';
import { Text, TextInput, View } from 'react-native';

type InputProps = {
  label: string;
  placeholder: string;
  last?: boolean;
  Icon?: any;
  value: string;
  onChange: (text: string) => void;
};

const Input = ({ label, placeholder, last = false, Icon, value, onChange }: InputProps) => {
  return (
    <View className={`relative flex w-full flex-col gap-2 ${last ? '' : 'mb-5'}`}>
      <Text className="font-exo text-darkGrayText text-base font-semibold">{label}</Text>
      {/** ====================== Text Input ============================= */}
      <View className="flex h-12 flex-row items-center justify-between rounded-lg bg-white px-4 shadow">
        <TextInput
          className="font-exo text-darkGrayText flex h-full w-full items-center rounded-lg bg-white text-sm"
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === 'Password'}
        />
        {/** ====================== Optional Icon ============================= */}
        {Icon ? <Icon className="text-lightGrayText absolute right-0 mr-4" size={20} /> : null}
      </View>
    </View>
  );
};

export default Input;
