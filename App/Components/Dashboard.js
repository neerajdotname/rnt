var React = require('react-native');

  var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image,
    TouchableHighlight,
  } = React;

var Dashboard = React.createClass({

  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <Text> {this.props.userInfo.avatar_url}</Text>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;
