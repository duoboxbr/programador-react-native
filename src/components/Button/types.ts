import {TouchableOpacityProps} from 'react-native';

export type StyledButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
};

export type ButtonProps = TouchableOpacityProps & StyledButtonProps;
