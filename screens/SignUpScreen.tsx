import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../assets';
import Button from '../components/Button';
import Input from '../components/Input';

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    // Navigate to the next screen with user data
    console.log('user data --> ', userData);
    navigation.navigate('SelectGrade', { userData });
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex flex-1 justify-around">
        <View className="mb-[-15%] mt-[-10%] flex-row justify-center">
          <Image source={signup} style={{ width: 353, height: 235 }} />
        </View>
        <View className="mt-3 flex w-full flex-col items-center justify-center">
          <Input
            label="Tên"
            placeholder="Tên của bạn"
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label="Email"
            placeholder="name@example.com"
            value={userData.email}
            onChange={(text) => handleInputChange('email', text)}
          />
          <Input
            label="Mật khẩu"
            placeholder="**********"
            value={userData.password}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
        </View>

        <Button
          primaryBtnText="Đăng ký"
          onPrimaryBtnPress={handleSubmit}
          secondaryBtnText1="Đã có tài khoản?"
          secondaryBtnText2="Đăng nhập"
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
