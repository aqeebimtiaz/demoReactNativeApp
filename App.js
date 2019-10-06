import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import AppIcon from './appIcon';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
    state = {
        inputValue: ''
    };

    changeText = value =>{
        this.setState({
            inputValue: value
        })
    }

    render(){
        let icon = {
            uri: 'https://www.amarbay.com/logo.png'
        };
        return(
            <View style={styles.container}>
                <AppIcon/>
                <Image source = {icon} style={{width: 250, height: 110}}/>
                <Text style={styles.sectionTitle}>Demo React Native App</Text>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Input text"
                    placeholderTextColor = "#ffffff"
                    autoCapitalize="sentences"
                    underlineColorAndroid="transparent"
                    selectionColor={'white'}
                    maxLength={30}
                    returnKeyType="done"
                    autoCorrect={false}
                    blurOnSubmit={true}
                    value = {this.state.inputValue}
                    onChangeText = {this.changeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#6F6F6F'
        },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.white,
    },
    input: {
        borderBottomWidth: 2,
        marginTop: 30,
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 34,
        color: '#ffffff',
        fontWeight: '600'
    }
})