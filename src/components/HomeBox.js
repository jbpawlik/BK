import React, { useState } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function HomeBox({handleSelect, borderColor}) {

  return (
      <View style={[HomeScreenTheme.HomeBox, {borderColor: borderColor}]}>
        <Text style={HomeScreenTheme.BoxText}>Home</Text>
      </View>
  )
}