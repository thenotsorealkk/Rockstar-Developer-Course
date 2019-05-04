import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ToolbarAndroid,
    FlatList
} from 'react-native';

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#428bca',
        paddingTop: 60,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row'
    },
    title: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        flex : 1,
        color: 'white'
    },
    content: {
        padding : 20
    },
    icon: {
        color: 'white'
    },
    item: {
        fontSize: 18,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
});

export default class App extends React.Component {
    state = {
        data: [
            {'_id' : "1", 'subject': 'Milk', 'status': 0},
            {'_id' : "2", 'subject': 'Butter', 'status': 1},
            {'_id' : "3", 'subject': 'Bread', 'status': 0},
        ]
    }
    keyExtractor = (item, index) => item._id;

    listItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text> {item.subject} </Text>
            </View>
        )
    }
    clear = () => {

    }

  render() {
    return (
      <View>
        <View style={styles.toolbar}>
            <MaterialIcons name="done-all" size={32} style={styles.icon} />
            <Text style={styles.title}>Native Todo</Text>
            <TouchableOpacity onPress={this.clear}>
                <MaterialIcons name="clear-all" size={32} style={styles.icon} />
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <View style={{ marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Todo </Text>
            </View>
            <FlatList
              data={this.state.data.filter(item => item.status === 0)}
              keyExtractor = {this.keyExtractor}
              renderItem = {this.listItem}
            />
            <View style={{ marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Done </Text>
            </View>
            <FlatList
              data={this.state.data.filter(item => item.status === 1)}
              keyExtractor = {this.keyExtractor}
              renderItem = {this.listItem}
            />
        </View>
      </View>
    );
  }
}
