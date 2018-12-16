import React from 'react';
import { Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default IntervalInput = ({title, initValue, onChange, minValue=1, maxValue=59}) => {
    return (
        <View>
            <Text>{title}</Text>
            <NumericInput
                minValue={minValue}
                maxValue={maxValue}
                initValue={initValue} 
                onChange={value => onChange(value)}/>
        </View>
    );
}