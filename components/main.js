import React from 'react';
import {Button} from 'react-native';


const main = props => {
  return (
    <Button title="Plus" onPress={() => props.setWater(props.water + 1)} />
  )
};

export default main;
