import { Platform } from 'react-native';

type FontWeight = '400' | '700' | 'normal' | 'bold' | '100' | '200' | '300' | '500' | '600' | '800' | '900';

const theme = {
    colors: {
        BodyBg: '#212529',
        BodyColor: '#dee2e6',
        BorderColor: '#495057',
        CodeColor: '#e685b5',
        DangerBgSubtle: '#2c0b0e',
        DangerBorderSubtle: '#842029',
        DangerTextEmphasis: '#ea868f',
        DarkBgSubtle: '#1a1d20',
        DarkBorderSubtle: '#343a40',
        DarkTextEmphasis: '#dee2e6',
        EmphasisColor: '#fff',
        FormInvalidBorderColor: '#ea868f',
        FormInvalidColor: '#ea868f',
        FormValidBorderColor: '#75b798',
        FormValidColor: '#75b798',
        HighlightBg: '#664d03',
        HighlightColor: '#dee2e6',
        InfoBgSubtle: '#032830',
        InfoBorderSubtle: '#087990',
        InfoTextEmphasis: '#6edff6',
        LightBgSubtle: '#343a40',
        LightBorderSubtle: '#495057',
        LightTextEmphasis: '#f8f9fa',
        LinkColor: '#6ea8fe',
        LinkHoverColor: '#8bb9fe',
        PrimaryBgSubtle: '#031633',
        PrimaryBorderSubtle: '#084298',
        PrimaryTextEmphasis: '#6ea8fe',
        SecondaryBg: '#343a40',
        SecondaryBgSubtle: '#161719',
        SecondaryBorderSubtle: '#41464b',
        SecondaryTextEmphasis: '#a7acb1',
        SuccessBgSubtle: '#051b11',
        SuccessBorderSubtle: '#0f5132',
        SuccessTextEmphasis: '#75b798',
        TertiaryBg: '#2b3035',
        WarningBgSubtle: '#332701',
        WarningBorderSubtle: '#997404',
        WarningTextEmphasis: '#ffda6a'
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