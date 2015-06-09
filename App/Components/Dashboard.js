var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var api = require('./../Utils/api');

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

   makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  },

  goToProfile () {
    this.props.navigator.push({
      component: Profile,
      title: "Profile Page",
      passProps: { userInfo: this.props.userInfo }
    });
  },

  goToRepos () {
    var login = this.props.userInfo.login;
    api.getRepos(login)
       .then((res) => {
          this.props.navigator.push({
            component: Repositories,
            title: 'Repos',
            passProps: { userInfo: this.props.userInfo, repos: res }
          });
       });
  },

  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />

        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor='#88d4f5'>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos}
          underlayColor='#E39EBF'>
            <Text style={styles.buttonText}> View Repositories </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor='#9BAAF3'>
            <Text style={styles.buttonText}> Take Notes </Text>
        </TouchableHighlight>

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
