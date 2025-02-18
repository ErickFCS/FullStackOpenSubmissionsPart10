import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';

const styles = StyleSheet.create({
    barContainer: {
        backgroundColor: theme.colors.SecondaryBg,
        padding: 10,
        paddingTop: Constants.statusBarHeight + 10
    },
    barScroll: {
        minWidth: '100%',
    },
    barNavLink: {
        backgroundColor: theme.colors.TertiaryBg,
        borderRadius: 25,
        flexGrow: 1,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    barText: {
        color: theme.colors.BodyColor,
        textAlign: 'center',
    },
    formButton: {
        backgroundColor: theme.colors.SuccessBgSubtle,
        borderColor: theme.colors.SuccessBorderSubtle,
        borderWidth: 1,
        margin: 10,
        padding: 12
    },
    formButtonText: {
        color: theme.colors.SuccessTextEmphasis,
        textAlign: 'center'
    },
    formContainer: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column'
    },
    formInput: {
        backgroundColor: theme.colors.DarkBgSubtle,
        borderColor: theme.colors.BorderColor,
        borderWidth: 1,
        color: theme.colors.InfoTextEmphasis,
        margin: 10,
        padding: 10
    },
    formInputError: {
        backgroundColor: theme.colors.DangerBgSubtle,
        borderColor: theme.colors.DangerBorderSubtle,
        borderWidth: 1,
        color: theme.colors.DangerTextEmphasis,
        margin: 10,
        padding: 10
    },
    formInputErrorText: {
        color: theme.colors.DangerTextEmphasis,
        marginBottom: 10,
        marginStart: 20
    },
    globalContainer: {
        backgroundColor: theme.colors.BodyBg,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    globalInfoText: {
        paddingHorizontal: 10,
        textAlign: 'center',
        width: '100%'
    },
    globalList: {
        paddingHorizontal: 10,
        paddingTop: 10
    },
    globalSeparator: {
        height: 10
    },
    repositoryContainer: {
        alignItems: 'flex-start',
        backgroundColor: theme.colors.SecondaryBg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    repositoryPicker: {
        color: theme.colors.BodyColor,
    },
    repositoryDescriptionContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    repositoryDescriptionText: {
        color: theme.colors.SecondaryTextEmphasis,
        marginTop: 7,
        width: 250
    },
    repositoryLanguageText: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.PrimaryTextEmphasis,
        borderRadius: 5,
        color: theme.colors.EmphasisColor,
        marginTop: 10,
        padding: 5
    },
    repositoryLinkBUtton: {
        alignSelf: 'stretch',
        backgroundColor: theme.colors.PrimaryTextEmphasis,
        borderRadius: 5,
        margin: 10
    },
    repositoryLinkButtonText: {
        color: theme.colors.EmphasisColor,
        padding: 10,
        textAlign: 'center'
    },
    repositoryNameText: {
        fontWeight: theme.fontWeights.bold,
        marginTop: 20
    },
    repositoryOwnerAvatar: {
        height: 50,
        width: 50
    },
    repositoryPhotoContainer: {
        margin: 20
    },
    repositoryPhotoDescriptionContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    repositorySearchBox: {
        backgroundColor: theme.colors.DarkBgSubtle,
        borderColor: theme.colors.BorderColor,
        borderRadius: 25,
        borderWidth: 1,
        color: theme.colors.InfoTextEmphasis,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    repositoryStat: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    repositoryStatName: {
        color: theme.colors.SecondaryTextEmphasis,
        marginBottom: 14,
        marginTop: 2
    },
    repositoryStatNumber: {
        fontWeight: theme.fontWeights.bold,
        marginTop: 24
    },
    repositoryStatsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    reviewContainer: {
        alignItems: 'flex-start',
        backgroundColor: theme.colors.SecondaryBg,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    reviewRate: {
        color: theme.colors.InfoTextEmphasis,
        textAlign: 'center'
    },
    reviewRateContainer: {
        backgroundColor: theme.colors.InfoBgSubtle,
        borderColor: theme.colors.InfoTextEmphasis,
        borderRadius: 30,
        borderWidth: 1,
        height: 60,
        margin: 10,
        padding: 20,
        width: 60
    },
    reviewRightSide: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    reviewText: {
        marginBottom: 10,
        marginTop: 10,
        width: 250
    },
    reviewUsername: {
        fontWeight: theme.fontWeights.bold,
        marginEnd: 10,
        marginTop: 10
    },
    extendedReviewContainer: {
        backgroundColor: theme.colors.SecondaryBg,
    },
    extendedReviewButtonContainer: {
        backgroundColor: theme.colors.SecondaryBg,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    extendedReviewRepoButton: {
        backgroundColor: theme.colors.InfoBgSubtle,
        borderColor: theme.colors.InfoBorderSubtle,
        borderWidth: 1,
        marginBottom: 10,
        padding: 12,
        width: '40%'
    },
    extendedReviewDeleteButton: {
        backgroundColor: theme.colors.DangerBgSubtle,
        borderColor: theme.colors.DangerBorderSubtle,
        borderWidth: 1,
        marginBottom: 10,
        padding: 12,
        width: '40%'
    },
    extendedReviewRepoButtonText: {
        color: theme.colors.InfoTextEmphasis,
        textAlign: 'center'
    },
    extendedReviewDeleteButtonText: {
        color: theme.colors.DangerTextEmphasis,
        textAlign: 'center'
    }
});

export default styles;