import { createTheme } from "@rneui/themed/dist/config"
import { Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export const borderColor = 'gold';
console.log(borderColor)
// const borderColor1 = 'pink';
// const borderColor2 = 'gold';
// const borderColor3 = 'orange';

export const HomeScreenTheme = createTheme({
  TabScreenContainer: {
    // flex: 1,
    // flexDirection: 'column',
  },
  HomeScreenContainer: {
    // flex: 1,
    // flexDirection: 'column',
  },
  SplashOverlay: {
    backgroundColor: 'lemonchiffon',
    borderWidth: 10,
    borderColor: 'gold',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  SplashOverlayText: {
    textAlign: 'center',
    color: 'lightgreen',
    fontWeight: '100',
    fontSize: DeviceWidth/14,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  // TabBar: {
  //   backgroundColor: 'gold',
  //   position: 'absolute'
  // },
  VoteHeader: {
    // flex: 1,
    backgroundColor: 'pink',
  },
  HomeHeader: {
    // flex: 1,
    backgroundColor: 'gold',
  },
  GraphHeader: {
    // flex: 1,
    backgroundColor: 'orange',
  },
  VoteScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'gold'
  },
  HomeScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'pink'
  },
  GraphScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'orange'
  },
  ThingBox: {
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderColor: 'gold',
    borderStyle: 'solid',
    height: DeviceWidth*.9,
    width: DeviceWidth,
    backgroundColor: 'lemonchiffon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeBox: {
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderColor: 'gold',
    borderStyle: 'solid',
    height: DeviceWidth*.9,
    width: DeviceWidth,
    backgroundColor: 'lemonchiffon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GraphBox: {
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderColor: 'gold',
    borderStyle: 'solid',
    height: DeviceWidth*.9,
    width: DeviceWidth,
    backgroundColor: 'lemonchiffon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GraphText: {
    textAlign: 'center',
    color: 'lightgreen',
    fontWeight: '900',
    fontSize: DeviceWidth/15,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  BoxText: {
    textAlign: 'center',
    color: 'lightgreen',
    fontWeight: '900',
    fontSize: DeviceWidth/7,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  ThingImage: {
    // flex: 1,
    // height: '50%',
    // width: DeviceWidth,
    // position: 'absolute',
    // top: 0
    // flex: 1,
    // width: '100%',
    // height: '100%',
    // borderWidth: 10,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  ButtonGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: DeviceHeight/2,
    width: DeviceWidth,
    // position: 'absolute',
    // bottom: 0
  },
  Button1: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'lightsalmon',
    borderStyle: 'solid',
    borderColor: borderColor,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },
  Button2: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'orange',
    borderStyle: 'solid',
    borderColor: borderColor,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 5,
    borderBottomWidth: 5
  },
  Button3: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'lightblue',
    borderStyle: 'solid',
    borderColor: borderColor,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
  },
  Button4: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'pink',
    borderStyle: 'solid',
    borderColor: borderColor,
    borderTopWidth: 5,
    borderRightWidth: 10,
    borderLeftWidth: 5,
    borderBottomWidth: 10
  },
  Text: {
    textAlign: 'center',
    color: 'lightgreen',
    fontWeight: '900',
    fontSize: DeviceWidth/14,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  XText: {
    textAlign: 'center',
    color: 'lightgreen',
    fontWeight: '100',
    fontSize: DeviceWidth/4,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  HeaderText: {
    textAlign: 'center',
    color: 'lemonchiffon',
    fontWeight: '900',
    fontSize: DeviceWidth/22,
    // textShadowRadius: 5,
    // textShadowColor: 'black',
  }
})