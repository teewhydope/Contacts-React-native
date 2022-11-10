import React, {FC} from 'react';
import {TextInput, View, StyleSheet, Text, ViewStyle} from 'react-native';
import colors from '../../theme/colors';
import {Typography} from '../../theme/type';

interface Prop {
  label: string;
  icon?: any;
  style?: ViewStyle | ViewStyle[];
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  error?: string;
  obscureText?: boolean;
  props?: object;
}

const InputView: FC<Prop> = ({
  label,
  icon,
  style,
  placeholder,
  onChangeText,
  value,
  error,
  obscureText,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={inputStyle.containerStyle}>
      {label && <Text>{label}</Text>}
      <View style={[inputStyle.iconContainer, {borderColor: getBorderColor()}]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[inputStyle.inputArea, style]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && (
        <Text style={[{color: colors.danger}, {fontSize: Typography.labelSmall.fontSize}]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputView;

const inputStyle = StyleSheet.create({
  inputArea: {
    flex: 1,
    height: 42,
  },
  iconContainer: {
    height: 42,
    borderWidth: 1.5,
    borderRadius: 4,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    marginTop: 5,
  },
  containerStyle: {marginTop: 20},
});
