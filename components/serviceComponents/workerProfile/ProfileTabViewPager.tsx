
import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap,TabBar, TabBarProps } from 'react-native-tab-view';
import Posts from './Posts';
import About from './About';
import Rating from './Rating';

const CustomTabBar: React.FC<TabBarProps> = (props) => {
  return (
    <TabBar
      {...props}
      style={styles.tabBar}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabLabel, focused ? styles.activeTabLabel : null]}>
          {route.title}
        </Text>
      )}
      indicatorStyle={styles.indicator}
      scrollEnabled={false}
    />
  );
};




const renderScene = SceneMap({
  first: Posts,
  second: About,
  third: Rating
});

const TabViewExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'About' },
    { key: 'third', title: 'Ratings' },

  ]);

  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={(props) => <CustomTabBar {...props} />}
      overScrollMode="never"
    style={{
      // backgroundColor:"red"
    }}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Background color of the header
    
  },
  tabLabel: {
    color: '#334155', // Text color of the tabs
  },
  activeTabLabel: {
    fontWeight: 'bold',
    color: '#083344', // Text color of the active tab
  },
  indicator: {
    backgroundColor: '#083344', // Indicator color
  },
  scene: {
    flex: 1,
    backgroundColor:"red"
  },
});

export default TabViewExample;
