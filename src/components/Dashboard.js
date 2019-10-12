import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class DashboardComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionDescription}>Movie info:</Text>
        <Text style={styles.sectionDescription}>userInfo.title</Text>
        <Text style={styles.sectionDescription}>userInfo.body</Text>
        // <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  }
});
