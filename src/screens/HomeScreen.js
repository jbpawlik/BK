import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ButtonGrid from '../components/ButtonGrid';
import { ThemeProvider } from "styled-components";
import { HomeScreenTheme }  from "../themes/HomeScreenTheme";

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <ThemeProvider theme={HomeScreenTheme}>
      <ButtonGrid/>
    </ThemeProvider>
  );
}