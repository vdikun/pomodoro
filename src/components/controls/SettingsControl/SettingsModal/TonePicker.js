import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { SoundClips, playSound } from './../../../../utils/sound';

import styles from './styles';

const defaultStyle = styles.setting;

let tones = [];
for (var key in SoundClips) {
    tones.push({name: key, ID: SoundClips[key]});
}

const _pickerItems = tones.map((tone)=> <Picker.Item label={tone.name} value={tone.ID} key={tone.ID} />)

export default class TonePicker extends Component {

    constructor(props) {
        super(props);
        //const { title, selectedTone, onValueChange, style=defaultStyle } = this.props;
        this.state = { pickerValue: this.props.selectedTone };
    }

    render () {
        const {title, onValueChange, style=defaultStyle} = this.props;
        return (
            <View style={style}>
                <Text>{title}</Text>
                <Picker
                    selectedValue={this.state.pickerValue}
                    onValueChange={(itemValue) => {
                        playSound(itemValue);
                        this.setState({pickerValue: itemValue});
                        onValueChange(itemValue);
                    }
                }>
                    {_pickerItems}
                </Picker>
            </View>
        );
    }
}