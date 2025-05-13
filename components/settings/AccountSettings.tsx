import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { ArrowLeftIcon, PencilSquareIcon, CheckIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../../theme';

export default function AccountSettings({
  user,
  editMode,
  editName,
  editEmail,
  editPhone,
  editBirthday,
  editAddress,
  setEditMode,
  setEditName,
  setEditEmail,
  setEditPhone,
  setEditBirthday,
  setEditAddress,
  handleSave,
  onBack,
}: any) {
  return (
    <View className="flex-1">
      <TouchableOpacity
        className="mb-6 flex-row items-center"
        onPress={() => {
          onBack();
          setEditMode(false);
        }}>
        <ArrowLeftIcon size={24} color={themeColors.bgPurple} className="mr-2" />
        <Text className="text-lg font-semibold text-bgPurple">Tài khoản</Text>
      </TouchableOpacity>
      {user && (
        <View className="w-full items-center">
          <Image
            source={user.avatar}
            style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 16 }}
          />
          {editMode ? (
            <>
              <TextInput
                className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-lg text-darkGrayText"
                value={editName}
                onChangeText={setEditName}
                placeholder="Tên"
              />
              <TextInput
                className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-lg text-darkGrayText"
                value={editEmail}
                onChangeText={setEditEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-lg text-darkGrayText"
                value={editPhone}
                onChangeText={setEditPhone}
                placeholder="Số điện thoại"
                keyboardType="phone-pad"
              />
              <TextInput
                className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-lg text-darkGrayText"
                value={editBirthday}
                onChangeText={setEditBirthday}
                placeholder="Ngày sinh"
              />
              <TextInput
                className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-lg text-darkGrayText"
                value={editAddress}
                onChangeText={setEditAddress}
                placeholder="Địa chỉ"
              />
              <TouchableOpacity
                className="flex-row items-center rounded-lg bg-bgPurple px-4 py-2"
                onPress={handleSave}>
                <CheckIcon size={20} color={themeColors.bgWhite} className="mr-2" />
                <Text className="text-lg text-bgWhite">Lưu</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text className="mb-2 text-xl font-semibold text-darkGrayText">{user.name}</Text>
              <Text className="mb-2 text-base text-gray-500">{user.email}</Text>
              <Text className="mb-2 text-base text-gray-500">Số điện thoại: {editPhone}</Text>
              <Text className="mb-2 text-base text-gray-500">Ngày sinh: {editBirthday}</Text>
              <Text className="mb-4 text-base text-gray-500">Địa chỉ: {editAddress}</Text>
              <TouchableOpacity
                className="flex-row items-center rounded-lg bg-bgLightGray px-4 py-2"
                onPress={() => {
                  setEditMode(true);
                  setEditName(user.name);
                  setEditEmail(user.email);
                }}>
                <PencilSquareIcon size={20} color={themeColors.bgPurple} className="mr-2" />
                <Text className="text-lg text-bgPurple">Chỉnh sửa</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
}
