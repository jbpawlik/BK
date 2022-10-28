import React, { useState, useEffect } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function GraphBox({handleSelect, borderColor, rankings, selectedButton, graphToShow, graphBackgroundColor, setGraphBackgroundColor}) {

  useEffect(() => {
    if (selectedButton == 'bouba') {
      setGraphBackgroundColor('lightsalmon')
    }
    if (selectedButton == 'kiki') {
      setGraphBackgroundColor('pink')
    }
    if (selectedButton == 'both') {
      setGraphBackgroundColor('orange')
    }
    if (selectedButton == 'neither') {
      setGraphBackgroundColor('lightblue')
    }
  }, [selectedButton, graphBackgroundColor]);

  
  return (
      <View style={[HomeScreenTheme.GraphBox, {borderColor: borderColor,backgroundColor: graphBackgroundColor}]}>
        <ImageBackground
            style={HomeScreenTheme.GraphBoxBackground}
            source={
              selectedButton == 'bouba' ?
              require('../assets/images/bouba-goldinner.png') 
            : selectedButton == 'both' ?
              require('../assets/images/boubakiki.png')
            : selectedButton == 'neither' ?
              require('../assets/images/boubakiki-gray.png')
            :
              require('../assets/images/kiki-goldinner.png')
            }
          >
            { !graphToShow || Object.values(rankings).length <= 0 ?
            // { selectedButton == undefined  ?
              <Text style={HomeScreenTheme.BoxText}>RANKINGS</Text>
              :
              <>
                <Text style={HomeScreenTheme.GraphText}>{rankings[graphToShow][0].toUpperCase()}</Text>
                <Text style={HomeScreenTheme.GraphText}>{rankings[graphToShow][1].toUpperCase()}</Text>
                <Text style={HomeScreenTheme.GraphText}>{rankings[graphToShow][2].toUpperCase()}</Text>
              </>
            }
        </ImageBackground>
      </View>
    )
}

// { selectedButton == 'bouba' ?
// <ImageBackground
//   source={require('../assets/images/bouba-goldinner.png')}
//   style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}
// >
//   : selectedButton == 'both' ?

//   <ImageBackground
//   source={require('../assets/images/bouba-goldinner.png')}
//   style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}
// >
//   : selectedButton == 'neither' ?

//   <ImageBackground
//   source={require('../assets/images/bouba-goldinner.png')}
//   style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}
// >

//   : selectedButton == 'kiki' ?

//   <ImageBackground
//   source={require('../assets/images/bouba-goldinner.png')}
//   style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}
//   >
// </ImageBackground>
// }