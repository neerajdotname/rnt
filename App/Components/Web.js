var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  WebView,
} = React;

var Web = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    flexDirection: 'column'
  }
});

module.exports = Web;
