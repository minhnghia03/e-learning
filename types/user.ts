import { ImageSourcePropType } from 'react-native';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: ImageSourcePropType;
}
