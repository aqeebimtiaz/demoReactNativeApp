import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { getUserInfo } from '../services/FetchUser';
import DashboardComponent from './Dashboard';

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      movieData: [],
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text
    });
  }

  handleSubmit() {
    console.log('from handleSubmit' + this.state.username);
    getUserInfo(this.state.username)
      .then((res) => {
          if(res.message === 'Not Found') {
            this.setState({
                error: 'User not found'
            });
          }
        else {
          console.log(res);
          let tempData = JSON.stringify(res);
          alert(tempData);
          // this.props.navigator.push({
          //   title: res.title || 'No Title',
          //   body: res.body || 'no body',
          //   passProps: {userInfo: res},
          //   component: DashboardComponent
          // });
          this.setState({
            error: false,
            username: ''
          })
        }
    })
    .catch((error) => {
      console.log('Fetch error' + error.message);
      alert(error.message);
    });
  }
  render() {
    let showErr = (
      this.state.error ?
      <Text>
        {this.state.error}
      </Text> :
      <View></View>
    );
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Search For Github User</Text>
        <TextInput style={styles.searchInput}/>
        <TouchableHighlight style = {styles.button} // underlayColor= "white"
                onPress = {this.handleSubmit} >
              <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        {showErr}
        <TouchableOpacity style={styles.list}>
          <Text style={styles.lightText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  searchInput: {
    borderBottomWidth: 2,
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    // borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'lightblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
