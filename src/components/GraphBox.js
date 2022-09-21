import React, { useState } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function GraphBox({handleSelect, borderColor}) {

  return (
      <View style={[HomeScreenTheme.GraphBox, {borderColor: borderColor}]}>
        <Text style={HomeScreenTheme.BoxText}>Graph</Text>
      </View>
  )
}