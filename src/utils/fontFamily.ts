import {fontFamilies} from 'src/constants/fonts';

export type PoppinsFontWeight =
  | 'normal'
  | 'medium'
  | 'mediumItalic'
  | 'bold'
  | 'black'
  | 'blackItalic'
  | 'light'
  | 'lightItalic'
  | 'italic'
  | 'semibold'
  | 'semiboldItalic'
  | 'thin'
  | 'thinItalic';

export type RobotoFontWeight =
  | 'normal'
  | 'medium'
  | 'mediumItalic'
  | 'bold'
  | 'black'
  | 'blackItalic'
  | 'light'
  | 'lightItalic'
  | 'italic'
  | 'thin'
  | 'thinItalic';

export type JetBrainsMonoFontWeight =
  | 'normal'
  | 'italic'
  | 'medium'
  | 'mediumItalic'
  | 'bold'
  | 'boldItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'semibold'
  | 'semiboldItalic'
  | 'light'
  | 'lightItalic'
  | 'extraLight'
  | 'extraLightItalic'
  | 'thin'
  | 'thinItalic';

export type FontFamily = 'POPPINS' | 'ROBOTO' | 'JETBRAINS_MONO';

export type FontWeights = {
  POPPINS: PoppinsFontWeight;
  ROBOTO: RobotoFontWeight;
  JETBRAINS_MONO: JetBrainsMonoFontWeight;
};

export const getFontFamily = <T extends FontFamily>(
  font: T,
  weight: FontWeights[T],
): string => {
  const family = fontFamilies[font];
  const fontName = family[weight];

  if (!fontName) {
    console.warn(
      `Font weight '${weight}' is not available for font family '${font}'. Falling back to 'normal'.`,
    );
    return family['normal' as FontWeights[T]];
  }

  return fontName;
};
