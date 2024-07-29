// import React, { useState } from 'react';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
// import { View, Text, StyleSheet } from 'react-native';

// function Screen({ id }:{id:string}) {
//   return (
//     <View
//       style={[
//         StyleSheet.absoluteFillObject,
//         {
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'white',
//         },
//       ]}
//     >
//       <Text style={{ fontSize: 20 }}>{id}</Text>
//     </View>
//   );
// }

// export default function ProfileTabViewPager() {
//   const [navigation, setNavigation] = useState({
//     index: 0,
//     routes: [
//       {
//         key: 1,
//       },
//       {
//         key: 2,
//       },
//       {
//         key: 3,
//       },
//     ],
//   });

//   const renderScene = SceneMap({
//     1: () => <Screen id="1" />,
//     2: () => <Screen id="2" />,
//     3: () => <Screen id="3" />,
//   });

//   return (
//     <TabView
//       navigationState={navigation}
//       renderScene={renderScene}
//       renderTabBar={() => null}
//       onIndexChange={index => {
//         setNavigation({ ...navigation, index: index });
//       }}
//       renderPager={props => (
//         <ViewPagerAdapter {...props} transition="curl" showPageIndicator />
//       )}
//     />
//   );
// }


import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <FlatList
    data={[{ key: 'item1' }, { key: 'item2' }, { key: 'item3' }]}
    renderItem={({ item }) => <Text>{item.key}</Text>}
    bounces={false} // Disable overscroll effect
    keyExtractor={(item) => item.key}
  />
);

const SecondRoute = () => (
  <FlatList
    data={[{ key: 'item4' }, { key: 'item5' }, { key: 'item6' }]}
    renderItem={({ item }) => <Text>{item.key}</Text>}
    bounces={false} // Disable overscroll effect
    keyExtractor={(item) => item.key}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default TabViewExample;
