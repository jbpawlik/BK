import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions } from 'react-native';
import ButtonGrid from '../components/ButtonGrid';
import { HomeScreenTheme }  from "../themes/HomeScreenTheme";
import ThingBox from "../components/ThingBox";
import HomeBox from "../components/HomeBox";
import GraphBox from "../components/GraphBox";
import { ThemeProvider, TabView, Tab, Image, Tile, Text } from '@rneui/themed';
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { faker } from '@faker-js/faker';

export default function HomeScreen() {
  const [index, setIndex] = useState(1);
  const [selectedButton, setSelectedButton] = useState(undefined);
  const [borderColor, setBorderColor] = useState('gold');
  const [thingsList, setThingsList] = useState([]);

  function recordVote(id, thing, bouba, both, neither, kiki, votes, rank) {
    const db = getDatabase();
    set(ref(db, 'things/'+ id), {thing: thing, bouba: bouba, both: both, neither: neither, kiki: kiki, rank: rank})
  }
  
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'things')
    console.log(dbRef)
    const thingArray = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((thing) => {
        thingArray.push(thing.val())
      })
      setThingsList(thingArray)
    })
  }, [])
  // Database seed
  // useEffect(() => {
  //   faker.locale='en_US'
  //   const seedData = faker.helpers.uniqueArray(faker.word.noun, 4999)
  //   seedData.forEach((noun, index) => {
  //     recordVote(index, noun, 0, 0, 0, 0, 0, 0, 0)
  //     // console.log(noun)
  //   })
  //   console.log('seeded')
  // }, []);

  // useEffect(() => {
  //   setThingsList(getThings)
  // }, []);

  useEffect(() => {
    console.log(selectedButton)
  }, [selectedButton]);

  function handleSelect(buttonValue) {
    setSelectedButton(buttonValue)
  }

  useEffect(() => {
    if(index == 0) {
      setBorderColor('pink')
    } else if (index == 1) {
      setBorderColor('gold')
    } else if (index == 2) {
      setBorderColor('orange')
    }
  }, [index]);

  // function handleChangeTabBackgroundOnSwipe() {
  //   setIndex
  //   console.log(index)
  //   if(index == 0) {
  //     borderColor = 'pink'
  //   } else if (index == 1) {
  //     borderColor = 'gold'
  //   } else if (index == 2) {
  //     borderColor = 'orange'
  //   }
  //   console.log(index)
  //   console.log(borderColor)
  // }

  return (
      <View style={HomeScreenTheme.TabScreenContainer}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          disableIndicator
          variant="default"
        >
          <Tab.Item
            buttonStyle={HomeScreenTheme.VoteHeader}
            title="VOTE"
            titleStyle={HomeScreenTheme.HeaderText}
            // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            buttonStyle={HomeScreenTheme.HomeHeader}
            title="BK"
            titleStyle={HomeScreenTheme.HeaderText}
            // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            buttonStyle={HomeScreenTheme.GraphHeader}
            title="GRAPH"
            titleStyle={HomeScreenTheme.HeaderText}
            // icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={HomeScreenTheme.VoteScreen} >
            <>
              <ThingBox
                handleSelect={handleSelect}
                borderColor={borderColor}
                thingsList={thingsList}
              />
              <ButtonGrid
                borderColor={borderColor}
                handleSelect={handleSelect}
                selectedButton={selectedButton}
              />
            </>
          </TabView.Item>
          <TabView.Item style={HomeScreenTheme.HomeScreen}>
            <>
              <HomeBox
                borderColor={borderColor}
              />
              <ButtonGrid
                borderColor={borderColor}
                handleSelect={handleSelect}
                selectedButton={selectedButton}
              />
            </>
          </TabView.Item>
          <TabView.Item style={HomeScreenTheme.GraphScreen}>
            <>
              <GraphBox
                borderColor={borderColor}              
              />
              <ButtonGrid
                borderColor={borderColor}
                handleSelect={handleSelect}
                selectedButton={selectedButton}
              />
            </>
          </TabView.Item>
        </TabView>
      </View>
  );

}