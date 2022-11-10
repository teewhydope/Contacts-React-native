import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../theme/colors';

interface Prop {
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
  loading?: boolean;
}

const CustomButton: FC<Prop> = ({label, onPress, backgroundColor, loading}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[
        buttonStyle.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : loading
            ? colors.grey
            : colors.primary,
        },
      ]}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        {loading && <ActivityIndicator style={buttonStyle.progressIndicator} />}
        {label && <Text style={buttonStyle.label}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

type Style = {
  container: ViewStyle;
  label: TextStyle;
  progressIndicator: ViewStyle;
};

const buttonStyle = StyleSheet.create<Style>({
  container: {
    height: 42,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressIndicator: {
    color: colors.white,
    marginRight: 10,
  },
});
