import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../assets';
import Button from '../components/Button';
import Input from '../components/Input';

const { signin } = images;

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="my-4 flex flex-1 justify-around">
        {/** ====================== Image ============================= */}
        <View className="mb-[-15%] flex-row justify-center">
          <Image source={signin} style={{ width: 266, height: 266 }} />
        </View>

        {/** ====================== Sign In inputs ============================= */}
        <View className="mt-3 flex w-full flex-col items-center justify-center">
          <Input label="Email" placeholder="name@example.com" />
          <Input label="Mật khẩu" placeholder="********" last />
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText="Đăng nhập"
          onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText1="Chưa có tài khoản?"
          secondaryBtnText2="Đăng ký"
          onSecondaryBtnPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
}
