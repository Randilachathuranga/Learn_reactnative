import {Image, View} from 'react-native';

import React from 'react';

const one = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />

      <Image
  source={{uri: '../../assets/images/partial-react-logo.png'}}
  style={{width: 40, height: 40}}
/>
    </View>
    
  );
};

export default one;