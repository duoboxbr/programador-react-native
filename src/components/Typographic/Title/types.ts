import {TextProps} from 'react-native';
import themeColors from '../../../global/styles/theme';

export type StyledTitleProps = {
  color?: keyof typeof themeColors.colors;
};

export type TitleProps = TextProps & StyledTitleProps;
