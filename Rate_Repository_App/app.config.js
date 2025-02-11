import 'dotenv/config'


export default {
    "name": "Rate_Repository_App",
    "slug": "Rate_Repository_App",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
        "**/*"
    ],
    "ios": {
        "supportsTablet": true
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#ffffff"
        }
    },
    "web": {
        "favicon": "./assets/favicon.png"
    },
    "extra": {
        APOLLO_URI: process.env.APOLLO_URI,
        REST_URI: process.env.REST_URI
    }
}