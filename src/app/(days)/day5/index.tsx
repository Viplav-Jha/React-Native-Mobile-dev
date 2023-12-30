import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarkdownDisplay from '../../../app/components/core/day3/MarkDownDisplay';

const description = `
# Biometrics
Use FaceID and Fingerprint to unlock the next screens`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: ' Biometrics' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day5/protected" asChild>
        <Button title="Go to Protected App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;