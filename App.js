import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import Main from './components/main';

const App = () => {
  const [water, setWater] = useState(0);
  return (
    <View>
      <Main setWater={setWater} water={water} />
      {/* <Button title="Plus" onPress={() => setWater(water + 1)} /> */}
      <Text>{water}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
