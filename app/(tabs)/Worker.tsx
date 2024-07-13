import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WorkerProps {}

const Worker = (props: WorkerProps) => {
  return (
    <View style={styles.container}>
      <Text>BecomeAWorker</Text>
    </View>
  );
};

export default Worker;

const styles = StyleSheet.create({
  container: {}
});
