
import React, {Component} from 'react';
import { StyleSheet,View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Provider} from 'react-redux';
import NewFile from './App/components/project/newFile.js';
import store from './store';

const AppStack = createStackNavigator({

	NewFile:{
		screen: NewFile,
		navigationOptions:{
			title: 'NewFile',
			headerStyle: {
				backgroundColor: 'blue',
				color:'white'
			},
			tabBarVisible: false
		},
	},
},
{
  initialRouteName: 'NewFile',
});

export default class App extends Component {
 	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppStack />
				</View>
			</Provider>
		
		);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
