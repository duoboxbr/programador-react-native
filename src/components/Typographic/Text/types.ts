import {TextProps} from 'react-native';
import themeColors from '../../../global/styles/theme';

export type StyledTextProps = {
  color?: keyof typeof themeColors.colors;
};

export type TextComponentProps = TextProps & StyledTextProps;
