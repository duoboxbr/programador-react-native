import {TextProps} from 'react-native';
import themeColors from '../../../global/styles/theme';

export type StyledSubTitleProps = {
  color?: keyof typeof themeColors.colors;
};

export type SubTitleProps = TextProps & StyledSubTitleProps;
