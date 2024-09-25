import {FontFamily, FontWeights} from '@utils/fontFamily';
import {isIOS} from '@utils/platformUtil';

export const fontFamilies: {
  readonly [K in FontFamily]: {
    readonly [W in FontWeights[K]]: string;
  };
} = {
  POPPINS: {
    normal: isIOS() ? 'Poppins-Regular' : 'PoppinsRegular',
    medium: isIOS() ? 'Poppins-Medium' : 'PoppinsMedium',
    mediumItalic: isIOS() ? 'Poppins-MediumItalic' : 'PoppinsMediumItalic',
    bold: isIOS() ? 'Poppins-Bold' : 'PoppinsBold',
    black: isIOS() ? 'Poppins-Black' : 'PoppinsBlack',
    blackItalic: isIOS() ? 'Poppins-BlackItalic' : 'PoppinsBlackItalic',
    light: isIOS() ? 'Poppins-Light' : 'PoppinsLight',
    lightItalic: isIOS() ? 'Poppins-LightItalic' : 'PoppinsLightItalic',
    italic: isIOS() ? 'Poppins-Italic' : 'PoppinsItalic',
    semibold: isIOS() ? 'Poppins-SemiBold' : 'PoppinsSemiBold',
    semiboldItalic: isIOS()
      ? 'Poppins-SemiBoldItalic'
      : 'PoppinsSemiBoldItalic',
    thin: isIOS() ? 'Poppins-Thin' : 'PoppinsThin',
    thinItalic: isIOS() ? 'Poppins-ThinItalic' : 'PoppinsThinItalic',
  },
  ROBOTO: {
    normal: isIOS() ? 'Roboto-Regular' : 'RobotoRegular',
    medium: isIOS() ? 'Roboto-Medium' : 'RobotoMedium',
    mediumItalic: isIOS() ? 'Roboto-MediumItalic' : 'RobotoMediumItalic',
    bold: isIOS() ? 'Roboto-Bold' : 'RobotoBold',
    black: isIOS() ? 'Roboto-Black' : 'RobotoBlack',
    blackItalic: isIOS() ? 'Roboto-BlackItalic' : 'RobotoBlackItalic',
    light: isIOS() ? 'Roboto-Light' : 'RobotoLight',
    lightItalic: isIOS() ? 'Roboto-LightItalic' : 'RobotoLightItalic',
    italic: isIOS() ? 'Roboto-Italic' : 'RobotoItalic',
    thin: isIOS() ? 'Roboto-Thin' : 'RobotoThin',
    thinItalic: isIOS() ? 'Roboto-ThinItalic' : 'RobotoThinItalic',
  },
  JETBRAINS_MONO: {
    normal: isIOS() ? 'JetBrainsMono-Regular' : 'JetBrainsMonoRegular',
    italic: isIOS() ? 'JetBrainsMono-Italic' : 'JetBrainsMonoItalic',
    medium: isIOS() ? 'JetBrainsMono-Medium' : 'JetBrainsMonoMedium',
    mediumItalic: isIOS()
      ? 'JetBrainsMono-MediumItalic'
      : 'JetBrainsMonoMediumItalic',
    bold: isIOS() ? 'JetBrainsMono-Bold' : 'JetBrainsMonoBold',
    boldItalic: isIOS()
      ? 'JetBrainsMono-BoldItalic'
      : 'JetBrainsMonoBoldItalic',
    extraBold: isIOS() ? 'JetBrainsMono-ExtraBold' : 'JetBrainsMonoExtraBold',
    extraBoldItalic: isIOS()
      ? 'JetBrainsMono-ExtraBoldItalic'
      : 'JetBrainsMonoExtraBoldItalic',
    semibold: isIOS() ? 'JetBrainsMono-SemiBold' : 'JetBrainsMonoSemiBold',
    semiboldItalic: isIOS()
      ? 'JetBrainsMono-SemiBoldItalic'
      : 'JetBrainsMonoSemiBoldItalic',
    light: isIOS() ? 'JetBrainsMono-Light' : 'JetBrainsMonoLight',
    lightItalic: isIOS()
      ? 'JetBrainsMono-LightItalic'
      : 'JetBrainsMonoLightItalic',
    extraLight: isIOS()
      ? 'JetBrainsMono-ExtraLight'
      : 'JetBrainsMonoExtraLight',
    extraLightItalic: isIOS()
      ? 'JetBrainsMono-ExtraLightItalic'
      : 'JetBrainsMonoExtraLightItalic',

    thin: isIOS() ? 'JetBrainsMono-Thin' : 'JetBrainsMonoThin',
    thinItalic: isIOS()
      ? 'JetBrainsMono-ThinItalic'
      : 'JetBrainsMonoThinItalic',
  },
} as const;
