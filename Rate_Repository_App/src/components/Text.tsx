import { StyleProp, TextStyle } from 'react-native';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

type FontWeight = '400' | '700' | 'normal' | 'bold' | '100' | '200' | '300' | '500' | '600' | '800' | '900'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.BodyColor,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal as FontWeight,
    },
});

interface PropType {
    style?: StyleProp<TextStyle>;
    props?: { [x: string]: any; };
    children?: any;
}

export const Text = ({ style, ...props }: PropType) => {
    return <NativeText testID='nativeText' style={[styles.text, style,]} {...props} />;
};
