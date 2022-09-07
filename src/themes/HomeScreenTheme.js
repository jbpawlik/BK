import { createTheme } from "@rneui/themed/dist/config"
import { Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export const HomeScreenTheme = createTheme({
  ButtonGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: DeviceWidth,
    width: DeviceWidth,
    position: 'absolute',
    bottom: 0
  },
  Button1: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    borderColor: 'gold',
    borderWidth: 5,
  },
  Button2: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'orange',
    borderStyle: 'solid',
    borderColor: 'gold',
    borderWidth: 5,
  },
  Button3: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'lightblue',
    borderStyle: 'solid',
    borderColor: 'gold',
    borderWidth: 5,
  },
  Button4: {
    width: DeviceWidth/2,
    height: DeviceWidth/2,
    backgroundColor: 'pink',
    borderStyle: 'solid',
    borderColor: 'gold',
    borderWidth: 5,
  },
  Text: {
    textAlign: 'center',
    color: 'gold',
    fontWeight: '900',
    fontSize: DeviceWidth/14,
    textShadowColor: 'black',
    textShadowRadius: 30,
  }
})