import { Dimensions, Platform } from "react-native";
//Screen Constatnts
const SCREEN_HEIGHT = 659;
const SCREEN_WIDTH = 360;

const { height, width } = Dimensions.get("window");

const Scale = (size:number) => (width / SCREEN_WIDTH) * size;

const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

export { Scale, verticalScale };




// export default function(units = 1) {
//   return (width / SCREEN_WIDTH) * units;
// }