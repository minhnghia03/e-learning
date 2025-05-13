import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useUser } from '../components/UserContext';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
} from 'react-native-heroicons/outline';
import AccountSettings from '../components/settings/AccountSettings';
import GeneralSettings from '../components/settings/GeneralSettings';
import PrivacySettings from '../components/settings/PrivacySettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import { useAppSettings } from '../components/AppSettingsContext';

const ITEMS = [
  { key: 'account', label: 'Tài khoản', icon: UserIcon },
  { key: 'general', label: 'Chung', icon: Cog6ToothIcon },
  { key: 'privacy', label: 'Quyền riêng tư', icon: LockClosedIcon },
  { key: 'notifications', label: 'Thông báo', icon: BellIcon },
  { key: 'logout', label: 'Đăng xuất', icon: ArrowRightOnRectangleIcon },
];

export default function SettingsScreen() {
  const { user, setUser } = useUser();
  const navigation = useNavigation();
  const { fontSize, setFontSize } = useAppSettings();
  const [activePage, setActivePage] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editEmail, setEditEmail] = useState(user?.email || '');
  const [editPhone, setEditPhone] = useState('0123456789');
  const [editBirthday, setEditBirthday] = useState('2000-01-01');
  const [editAddress, setEditAddress] = useState('123 Đường ABC, Quận 1, TP.HCM');
  const [volume, setVolume] = useState(50);
  const [darkMode, setDarkMode] = useState(false);
  const [enableNotifications, setEnableNotifications] = useState(true);

  const handleLogout = () => {
    setUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  const handleSave = () => {
    if (user) {
      setUser({ ...user, name: editName, email: editEmail });
      setEditMode(false);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'account':
        return (
          <AccountSettings
            user={user}
            editMode={editMode}
            editName={editName}
            editEmail={editEmail}
            editPhone={editPhone}
            editBirthday={editBirthday}
            editAddress={editAddress}
            setEditMode={setEditMode}
            setEditName={setEditName}
            setEditEmail={setEditEmail}
            setEditPhone={setEditPhone}
            setEditBirthday={setEditBirthday}
            setEditAddress={setEditAddress}
            handleSave={handleSave}
            onBack={() => setActivePage(null)}
          />
        );
      case 'general':
        return (
          <GeneralSettings
            fontSize={fontSize}
            setFontSize={setFontSize}
            volume={volume}
            setVolume={setVolume}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            enableNotifications={enableNotifications}
            setEnableNotifications={setEnableNotifications}
            onBack={() => setActivePage(null)}
          />
        );
      case 'privacy':
        return <PrivacySettings onBack={() => setActivePage(null)} />;
      case 'notifications':
        return <NotificationSettings onBack={() => setActivePage(null)} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8 pt-12">
      <View className="flex-1">
        <Text className="mb-8 text-2xl font-bold text-darkGrayText">Cài đặt</Text>
        {user && !activePage && (
          <View className="mb-8 items-center">
            <Image
              source={user.avatar}
              style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }}
            />
            <Text className="text-xl font-semibold text-darkGrayText">{user.name}</Text>
          </View>
        )}
        {/* Main List or Page */}
        {!activePage ? (
          <View>
            {ITEMS.map((item) => {
              const Icon = item.icon;
              if (item.key === 'logout') {
                return (
                  <TouchableOpacity
                    key={item.key}
                    className="mb-2 flex-row items-center rounded-lg bg-bgPurple p-4"
                    onPress={handleLogout}>
                    <Icon size={24} color={themeColors.bgWhite} className="mr-3" />
                    <Text className="flex-1 text-lg text-bgWhite">{item.label}</Text>
                  </TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity
                  key={item.key}
                  className="mb-2 flex-row items-center rounded-lg bg-bgLightGray p-4"
                  onPress={() => setActivePage(item.key)}>
                  <Icon size={24} color={themeColors.bgPurple} className="mr-3" />
                  <Text className="flex-1 text-lg text-darkGrayText">{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          renderPage()
        )}
      </View>
    </SafeAreaView>
  );
}
