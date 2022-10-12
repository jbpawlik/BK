import React, {useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from 'react-native';
import ButtonGrid from '../components/ButtonGrid';
import { HomeScreenTheme }  from "../themes/HomeScreenTheme";
import ThingBox from "../components/ThingBox";
import HomeBox from "../components/HomeBox";
import GraphBox from "../components/GraphBox";
import { ThemeProvider, TabView, Tab, Image, Tile, Text } from '@rneui/themed';
import { getDatabase, ref, set, get, update, onValue, child } from "firebase/database";
import { faker } from '@faker-js/faker';
import { Audio } from 'expo-av';

export default function HomeScreen() {
  const [index, setIndex] = useState(1);
  const [selectedButton, setSelectedButton] = useState(undefined);
  const [borderColor, setBorderColor] = useState('gold');
  const [graphBackgroundColor, setGraphBackgroundColor] = useState('lemonchiffon');
  const [thingsList, setThingsList] = useState([]);
  const [selectedThing, setSelectedThing] = useState(undefined);
  const [rankings, setRankings] = useState({});
  const [graphToShow, setGraphToShow] = useState(undefined);
  const [sound, setSound] = useState(undefined);

  async function playBouba() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/bouba.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playKiki() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/kiki.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function playNeither() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/chk.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function playBoth() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/bouba-kiki.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'things')
    const thingArray = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((thing) => {
        thingArray.push(thing.val())
      })
      setThingsList(thingArray)
    })
  }, [])

  useEffect(() => {
    // console.log(thingsList[0].kiki)
    let tempRankings = {}
    let both = []
    let neither = []
    let bouba = []
    let kiki = []
    if(thingsList && Object.keys(rankings).length <= 0 ) {
      thingsList.forEach((thing) => {
        if(thing.both > 0) {
          both.push([thing.id, thing.thing, thing.both])
        }
        if(thing.neither > 0) {
          neither.push([thing.id, thing.thing, thing.neither])
        }
        if(thing.bouba > 0) {
          bouba.push([thing.id, thing.thing, thing.bouba])
        }
        if(thing.kiki > 0) {
          kiki.push([thing.id, thing.thing, thing.kiki])
        }
        })
        if(both.length > 0 && neither.length > 0 && bouba.length > 0 && kiki.length > 0) {
        both.sort((a,b) => {
          return b[2] - a[2]
        })
        neither.sort((a,b) => {
          return b[2] - a[2]
        })
        bouba.sort((a,b) => {
          return b[2] - a[2]
        })
        kiki.sort((a,b) => {
          return b[2] - a[2]
        })
        tempRankings = {
          "both": [`#1: ${both[0][1]}`, `#2: ${both[1][1]}`, `#3: ${both[2][1]}`],
          "neither": [`#1: ${neither[0][1]}`, `#2: ${neither[1][1]}`, `#3: ${neither[2][1]}`],
          "bouba": [`#1: ${bouba[0][1]}`, `#2: ${bouba[1][1]}`, `#3: ${bouba[2][1]}`],
          "kiki": [`#1: ${kiki[0][1]}`, `#2: ${kiki[1][1]}`, `#3: ${kiki[2][1]}`]
        }
      }
      if(Object.values(tempRankings).length > 0) {
        setRankings(tempRankings)
      }
    }
  }, [rankings, graphToShow]);

  useEffect(() => {
    if (thingsList) {
      setSelectedThing(thingsList[Math.floor(Math.random() * 4999)])
    } else {
      setSelectedThing('TEST')
    }
  }, [thingsList]);

  // Database seed
  // function recordVote(id, thing, bouba, both, neither, kiki, votes, rank) {
  //   const db = getDatabase();
  //   set(ref(db, 'things/'+ id), {id: id, thing: thing, bouba: bouba, both: both, neither: neither, kiki: kiki, rank: rank})
  // }
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
    // console.log(selectedButton)
  }, [selectedButton]);

  function handleSelect(buttonValue) {
    const db = getDatabase();
    setSelectedButton(buttonValue);
    if (buttonValue == 'bouba') {
      playBouba()
    }
    if (buttonValue == 'kiki') {
      playKiki()
    }
    if (buttonValue == 'both') {
      playBoth()
    }
    if (buttonValue == 'neither') {
      playNeither()
    }
    // console.log(selectedThing)
    if (index == 0) {
      update(ref(db, 'things/' + selectedThing.id), {
        [buttonValue]: selectedThing[buttonValue] + 1
      })
      setSelectedThing(thingsList[Math.floor(Math.random() * 4999)])
    }
    if (index == 2) {
      setGraphToShow(buttonValue)
    }
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
                selectedThing={selectedThing}
              />
              <ButtonGrid
                borderColor={borderColor}
                handleSelect={handleSelect}
                selectedButton={selectedButton}
                setSelectedThing={setSelectedThing}
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
                rankings={rankings}
                selectedButton={selectedButton}
                graphToShow={graphToShow}
                graphBackgroundColor={graphBackgroundColor}
                setGraphBackgroundColor={setGraphBackgroundColor}
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