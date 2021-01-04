import React from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

class three extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }

  static navigationOptions = {
    title: 'Three by Three'
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    });
  }

  // Sound = require('react-native-sound')

  // track = new Sound('sound.mp3', null, (error) => {
  //   if (error)
  //     console.log("Can't play sound. ", e);
  //   else
  //     track.play();
  // });


  getWinner = () => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum, flag;
    var count = 0;
    // rows and check
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      flag = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3 || flag == 3) { return 1; }
      else if (sum == -3 || flag == -3) { return -1 };
    }

    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1 };

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) { return 1; }
    else if (sum == -3) { return -1 };

    for (var i = 0; i < NUM_TILES; i++) {
      for (var j = 0; j < NUM_TILES; j++) {
        if (arr[i][j] == 0) { count++ }
      }
    }

    if (count == 0) {
      return 2;
    }
    return 0;
  }
  onTilePress = (row, col) => {
    // for not allowing double press
    var value = this.state.gameState[row][col];
    if (value !== 0) { return; }
    // for current state of player
    var currentPlayer = this.state.currentPlayer;
    // set correct tile
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({ gameState: arr });
    // switch to player
    var nextplayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({ currentPlayer: nextplayer });
    // winner winner
    var win = this.getWinner();
    if (win == 1) {
      ToastAndroid.show("Player 1 Won", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      this.initializeGame();
    } else if (win == -1) {
      ToastAndroid.show("Player 2 Won", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      this.initializeGame();
    }
    else if (win == 2) {
      ToastAndroid.show("Its a Draw", ToastAndroid.LONG, ToastAndroid.BOTTOM);
      this.initializeGame();
    }
  }

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;
      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />
      default:
        return <View />;
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.title, { borderLeftWidth: 0, borderTopWidth: 0}]}>{this.renderIcon(0, 0)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.title, {borderTopWidth: 0}]}>{this.renderIcon(0, 1)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.title, {borderRightWidth: 0, borderTopWidth: 0}]}>{this.renderIcon(0, 2)}</TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.title, {borderLeftWidth: 0}]}>{this.renderIcon(1, 0)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={styles.title}>{this.renderIcon(1, 1)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={[styles.title, {borderRightWidth: 0}]}>{this.renderIcon(1, 2)}</TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.title, {borderLeftWidth: 0, borderBottomWidth: 0}]}>{this.renderIcon(2, 0)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.title, { borderBottomWidth: 0}]}>{this.renderIcon(2, 1)}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.title, {borderRightWidth: 0, borderBottomWidth: 0}]}>{this.renderIcon(2, 2)}</TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23C4E4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    borderWidth: 5,
    borderColor: '#fff',
    width: 100,
    height: 100
  },

  tileX: {
    color: "#084B83",
    fontSize: 100,
  },

  tileO: {
    marginLeft: 6,
    marginTop: 6,
    color: "#084B83",
    fontSize: 80,
  }
});

export default three;