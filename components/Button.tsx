import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonProps = {
  onPrimaryBtnPress: () => void;
  primaryBtnText: string;
  showSecondaryBtn?: boolean;
  secondaryBtnText1?: string;
  secondaryBtnText2?: string;
  onSecondaryBtnPress?: () => void;
};

const Button = ({
  onPrimaryBtnPress,
  primaryBtnText,
  showSecondaryBtn = true,
  secondaryBtnText1,
  secondaryBtnText2,
  onSecondaryBtnPress,
}: ButtonProps) => {
  return (
    <View className="flex flex-col items-center gap-8">
      <Pressable
        onPress={onPrimaryBtnPress}
        className="flex max-h-[61px] w-[267px] items-center justify-center rounded-xl bg-bgPurple px-7 py-3">
        <Text className="font-exoSemibold text-center text-xl text-bgWhite">{primaryBtnText}</Text>
      </Pressable>
      {showSecondaryBtn ? (
        <View className="flex-row justify-center">
          <Text className="font-exo text-lg text-darkGrayText">{secondaryBtnText1} </Text>
          <Pressable onPress={onSecondaryBtnPress}>
            <Text className="font-exo text-lg text-bgPurple">{secondaryBtnText2}</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Button;
