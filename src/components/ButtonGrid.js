import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ButtonGroup } from '@rneui/themed'

export default function ButtonGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <>
      <ButtonGroup
        style='ButtonGroup'
        buttons={['Bouba', 'Kiki', 'Bouba and Kiki', 'Neither']}
        onPress={(value) => {
          setSelectedIndex(value);
        }}

      />
    </>
  );
}