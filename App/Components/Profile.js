var React = require('react-native');
var Badge = require('./Badge');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
} = React;

var Profile = React.createClass({

  render () {
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];

    var list = topicArr.map((item, index) => {
      if (!userInfo[item]) {
        return <View key={index} />;
      } else {
        return (
               <View key={index}>
                <Text style={styles.rowTitle}> ?? </Text>
                <Text style={styles.rowContent}> {userInfo[item]} </Text>
               </View>
        )
      }
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

module.exports = Profile;
