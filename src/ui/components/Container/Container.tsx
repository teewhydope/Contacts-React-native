import {ScrollView} from 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Container = ({children}) => {
  return (
    <ScrollView>
      <SafeAreaView style={containerStyle.container}>
        <View>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Container;

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
