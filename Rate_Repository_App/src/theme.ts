import { Platform } from "react-native";
type FontWeight = "400" | "700" | "normal" | "bold" | "100" | "200" | "300" | "500" | "600" | "800" | "900";

const theme = {
  colors: {
    bsBodyColor: '#dee2e6',
    bsBodyBg: '#212529',
    bsEmphasisColor: '#fff',
    bsSecondaryBg: '#343a40',
    bsTertiaryBg: '#2b3035',
    bsPrimaryTextEmphasis: '#6ea8fe',
    bsSecondaryTextEmphasis: '#a7acb1',
    bsSuccessTextEmphasis: '#75b798',
    bsInfoTextEmphasis: '#6edff6',
    bsWarningTextEmphasis: '#ffda6a',
    bsDangerTextEmphasis: '#ea868f',
    bsLightTextEmphasis: '#f8f9fa',
    bsDarkTextEmphasis: '#dee2e6',
    bsPrimaryBgSubtle: '#031633',
    bsSecondaryBgSubtle: '#161719',
    bsSuccessBgSubtle: '#051b11',
    bsInfoBgSubtle: '#032830',
    bsWarningBgSubtle: '#332701',
    bsDangerBgSubtle: '#2c0b0e',
    bsLightBgSubtle: '#343a40',
    bsDarkBgSubtle: '#1a1d20',
    bsPrimaryBorderSubtle: '#084298',
    bsSecondaryBorderSubtle: '#41464b',
    bsSuccessBorderSubtle: '#0f5132',
    bsInfoBorderSubtle: '#087990',
    bsWarningBorderSubtle: '#997404',
    bsDangerBorderSubtle: '#842029',
    bsLightBorderSubtle: '#495057',
    bsDarkBorderSubtle: '#343a40',
    bsLinkColor: '#6ea8fe',
    bsLinkHoverColor: '#8bb9fe',
    bsCodeColor: '#e685b5',
    bsHighlightColor: '#dee2e6',
    bsHighlightBg: '#664d03',
    bsBorderColor: '#495057',
    bsFormValidColor: '#75b798',
    bsFormValidBorderColor: '#75b798',
    bsFormInvalidColor: '#ea868f',
    bsFormInvalidBorderColor: '#ea868f',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400' as FontWeight,
    bold: '700' as FontWeight,
  },
};

export default theme;