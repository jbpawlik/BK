import React, { useState } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function HomeBox({handleSelect, borderColor, selectedButton}) {

  return (
      <View style={[HomeScreenTheme.HomeBox, {borderColor: borderColor}]}>
        { !selectedButton ? 
          <Text style={HomeScreenTheme.BoxText}>BOUBA{'\n'}⚞☯⚟{'\n'}KIKI</Text>
          :
          selectedButton == 'bouba' ?
            <ImageBackground
              source={require('../assets/images/bouba-goldinner.png')}
              style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}
            />
          :
          selectedButton == 'both' ?
            <ImageBackground
              source={require('../assets/images/boubakiki.png')}
              style={{width: '100%', height: '100%', backgroundColor: 'orange'}}
            />
          :
          selectedButton == 'neither' ?
            <ImageBackground
              source={require('../assets/images/boubakiki-gray.png')}
              style={{width: '100%', height: '100%', backgroundColor: 'lightblue'}}
            />
          :
          selectedButton == 'kiki' ?
            <ImageBackground
              source={require('../assets/images/kiki-goldinner.png')}
              style={{width: '100%', height: '100%', backgroundColor: 'pink'}}
            />
          :
          <Text></Text>
        }

      </View>
  )
}