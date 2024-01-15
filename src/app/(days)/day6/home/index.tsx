// src/App.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ScratchCard from '../../../components/day6/ScratchCard';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScratchCard winMessage="Congratulations! You won $10" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
