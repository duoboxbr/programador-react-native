import {TouchableOpacityProps} from 'react-native';

export type ClientCardProps = TouchableOpacityProps & {
  name: string;
  plan: string;
  service: string;
  active: boolean;
};

export type ClientActiveStatusProps = Pick<ClientCardProps, 'active'>;
