import React, { useState, useEffect } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";


export default function ThingBox({handleSelect, borderColor, thingsList, selectedThing}) {

  return (
      <View style={[HomeScreenTheme.ThingBox, {borderColor: borderColor}]}>
        <Text style={HomeScreenTheme.BoxText}>
          {selectedThing ? selectedThing.thing.toUpperCase() : 'LOADING'}
        </Text>
      </View>
  )
}