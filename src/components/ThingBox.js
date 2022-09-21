import React, { useState, useEffect } from "react"
import { View, ImageBackground } from "react-native"
import { TabView, Tab, Image, Tile, Text } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";


export default function ThingBox({handleSelect, borderColor, thingsList}) {
  const [text, setText] = useState(undefined)

  useEffect(() => {
    if (thingsList) {
      setText(thingsList[0])
    } else {
      setText('test')
    }
  }, [thingsList]);

  return (
      <View style={[HomeScreenTheme.ThingBox, {borderColor: borderColor}]}>
        <Text style={HomeScreenTheme.BoxText}>
          {text ? text.thing : 'test'}
        </Text>
      </View>
  )
}