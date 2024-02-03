import { Platform} from 'react-native';
import Strings from './Strings'

class Fonts {
    static getFontByOS = (fontStyle: string) => {
        switch (fontStyle) {
            case Strings.fontLight:
                if (Platform.OS == 'android') {
                    return 'Nunito Light'
                } else {
                    return 'Nunito-Light'
                }
            case Strings.fontRegular:
                if (Platform.OS == 'android') {
                    return 'Nunito Regular'
                } else {
                    return 'Nunito-Regular'
                }
            case Strings.fontBold:
                if (Platform.OS == 'android') {
                    return 'Nunito Bold'
                } else {
                    return 'Nunito-Bold'
                }
            case Strings.fontSemiBold:
                if (Platform.OS == 'android') {
                    return 'Nunito SemiBold'
                } else {
                    return 'Nunito-SemiBold'
                }
            default: break;
        }
    }
}
export default Fonts;