import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../assets';
import Button from '../components/Button';

const { welcome } = images;

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View className="my-4 flex flex-1 justify-around">
        <View className="flex-row justify-center">
          <Image source={welcome} style={{ width: 324, height: 324 }} />
        </View>

        <Button
          primaryBtnText="Đăng ký"
          onPrimaryBtnPress={() => navigation.navigate('SignUp')}
          secondaryBtnText2="Đăng nhập"
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
