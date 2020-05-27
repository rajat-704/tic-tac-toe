import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Animated, Easing, Text } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { Card } from 'react-native-elements';

class Play extends React.Component {

    static navigationOptions = {
        title: 'Help'
      }

    render() {
        return (
            <ScrollView>
                <Card title="What is TIC-TAC-TOE">
                    <Text>TIC-TAC-TOE is a game for two players,
                        X and O, who take turns marking the spaces in a 3×3 grid or in 4×4. 
                        The player who succeeds in placing three (or four on 4×4 grid) of their marks in a horizontal,
                        vertical, or diagonal row is the winner.</Text>
                </Card>
                <Card title="How to play ?">
                    <Text>Players alternate placing Xs and Os on
                        the board until either player has three
                        in a row, horizontally, vertically, or diagonally 
                        or until all squares on the grid are filled. If
                        a player is able to draw three Xs or three Os in a row,
                        then that player wins. If all squares are filled 
                        and neither player has made a complete row of 
                        Xs or Os, then the game is a draw.</Text>
                </Card>
                <Text style={styles.txt}>Develped by Rajat Gumber (-: </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
      color: '#B8B8B8',
      fontSize: 22,
      margin: 25
    }
})

export default Play;