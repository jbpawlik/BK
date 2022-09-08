import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, ButtonGroup, ThemeProvider } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function ButtonGrid() {
  const [selectedButton, setSelectedButton] = useState(undefined);

  useEffect(() => {
    console.log(selectedButton)
  }, [selectedButton]);

  function handleSelect(buttonValue) {
    setSelectedButton(buttonValue)}

  return (
    <ThemeProvider theme={HomeScreenTheme}>
      <View
      style={HomeScreenTheme.ButtonGrid}>
        <Button
          buttonStyle={HomeScreenTheme.Button1}
          title="Bouba"
          type="clear"
          onPress={() => handleSelect('bouba')}
        >
          <ImageBackground
            source={require('../assets/images/bouba-goldinner.png')}
            style={{width: '100%', height: '100%'}}
            >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={HomeScreenTheme.Text}>BOUBA</Text>
            </View>
          </ImageBackground>
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button2}
          title="Both"
          type='outline'
          onPress={() => handleSelect('both')}
        >
          <ImageBackground
            source={require('../assets/images/boubakiki.png')}
            style={{width: '100%', height: '100%',}}
          >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={HomeScreenTheme.Text}>BOUBA{'\n'}AND{'\n'}KIKI</Text>
            </View>
          </ImageBackground>
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button3}
          title="Neither Bouba Nor Kiki"
          type='outline'
          onPress={() => handleSelect("neither")}
          >
          <ImageBackground
            source={require('../assets/images/boubakiki.png')}
            style={{width: '100%', height: '100%'}}
            >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={HomeScreenTheme.Text}>NEITHER{'\n'}BOUBA{'\n'}NOR{'\n'}KIKI</Text>
            </View>
          </ImageBackground>
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button4}
          title="Kiki"
          type='outline'
          onPress={() => handleSelect("kiki")}
          >
          <ImageBackground
            source={require('../assets/images/kiki-goldinner.png')}
            style={{width: '100%', height: '100%'}}
            >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={HomeScreenTheme.Text}>KIKI</Text>
            </View>
          </ImageBackground>
        </Button>
      </View>
    </ThemeProvider>
  );
}