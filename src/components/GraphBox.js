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
      <View style={[HomeScreenTheme.GraphBox, {borderColor: borderColor, backgroundColor: graphBackgroundColor}]}>
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
      </View>
  )
}