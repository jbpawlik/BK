import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import { Button, ButtonGroup, ThemeProvider } from '@rneui/themed'
import { HomeScreenTheme } from "../themes/HomeScreenTheme";

export default function ButtonGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <ThemeProvider theme={HomeScreenTheme}>
      <View
      style={HomeScreenTheme.ButtonGrid}>
        <Button
          buttonStyle={HomeScreenTheme.Button1}
          title="Bouba"
          type='outline'
        >
          <ImageBackground
            source={require('../assets/images/bouba-goldinner.png')}
            style={{width: '100%', height: '100%'}}
          />
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button2}
          title="Bouba and Kiki"
          type='outline'
        >
          <ImageBackground
            source={require('../assets/images/bouba+kiki-gold.png')}
            style={{width: '100%', height: '100%'}}
          />
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button3}
          title="Neither"
          type='outline'
          >
          <ImageBackground
            source={require('../assets/images/bouba+kiki-gray.png')}
            style={{width: '100%', height: '100%'}}
          />
        </Button>
        <Button
          buttonStyle={HomeScreenTheme.Button4}
          title="Kiki"
          type='outline'
          >
          <ImageBackground
            source={require('../assets/images/kiki-goldinner.png')}
            style={{width: '100%', height: '100%'}}
          />
        </Button>
      </View>
      {/* <ButtonGroup
        containerStyle={HomeScreenTheme.ButtonGrid}
        buttonStyle={HomeScreenTheme.ButtonGroup}
        buttons={['Bouba', 'Kiki', 'Bouba and Kiki', 'Neither']}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
      /> */}
    </ThemeProvider>
  );
}