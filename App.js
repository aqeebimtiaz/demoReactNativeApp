import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Navigator
} from 'react-native';
// import AppIcon from '.src/components/AppIcon';
import SearchComponent from './src/components/SearchComponent';
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
                <Image source = {icon} style={{width: 250, height: 110}}/>

                <SearchComponent/>
                <TextInput
                    style = {styles.textInput}
                    placeholder = "Input text"
                    placeholderTextColor = "#6F6F6F"
                    autoCapitalize="sentences"
                    underlineColorAndroid="transparent"
                    selectionColor={'white'}
                    maxLength={30}
                    returnKeyType="done"
                    autoCorrect={false}
                    blurOnSubmit={true}
                    value = {this.state.inputValue}
                    onChangeText = {this.changeText}
                /> //whll be deprecated later
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    textInput: {
        borderBottomWidth: 2,
        marginTop: 30,
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 24,
        color: '#6F6F6F',
        fontWeight: '400'
    }
})
