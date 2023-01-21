import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';

const XIcon = ({ size = 40 }) => <FontAwesome name="close" size={size} color="#31c4be" />
const OIcon = ({ size = 40 }) => <FontAwesome name="circle-o" size={size} color="#f2b237" />
const restartIcon = <IoniconsIcon name="refresh" size={40} color="#1f3540" />

export default {
    XIcon,
    OIcon,
    restartIcon
}