var React = require('react-native');

  var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
  } = React;

var Dashboard = React.createClass({

  render () {
    return (
      <View style={styles.container}>
        <Text>
          This is the dashboard
        </Text>
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
})

module.exports = Dashboard;
