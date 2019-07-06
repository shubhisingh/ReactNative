import React, {Component} from 'react';
import {FlatList, View,Text,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';    
import {reposActions} from '../../../store/actions'
import { connect } from 'react-redux';

const extractKey = ({ id }) => id.toString();
class NewFile extends Component{

    constructor(props){
        super(props);
        this.state = {
            a: null,
        }
    }
    componentDidMount() { 
        const { dispatch } = this.props;
        console.log("reposActions",reposActions);
        dispatch(
            reposActions.getAllRepos()
        );
    }

    renderItem(data) {
        let { item, index } = data;
        console.log("itemitem",item.key)
        return (
            <View style={styles.itemParent}>
                <FontAwesome style={{ marginLeft: -20 }} name="film" size={20} color="#336699"  />
                <View style={styles.item2}>
                    <Text style={styles.itemName}>{item.text}</Text>
                    <Text style={styles.itemstatus}>{item.status}</Text>
                    <View style={styles.item2} >
                        <View style={{flexDirection:'row'}} >
                            <FontAwesome style={marginBottom= 10} name="star" size={20} color="black"  />
                            <Text style={styles.itemstatus2}>{item.id}</Text>
                            <FontAwesome style={marginBottom= 70} name="circle" size={20} color="yellow"  />
                            <Text style={styles.itemstatus1}>{item.master}</Text>
                        </View >
                    </View >
                </View>
            </View>
        ) 
    }
   
    render(){
        const { reposList } = this.props;
        console.log('repos', reposList);
        var array =[];
        for(i=0; i<=reposList.length-1; i++) {
            listArray = {};
            listArray['text']       = reposList[i]['name'];
            listArray['id']        = reposList[i]['id'];
            listArray['status']     = reposList[i]['full_name'];
            listArray['key']        = reposList[i]['private'];
            listArray['master']        = reposList[i]['default_branch'];
            array.push(listArray);
        }
        console.log('reposarray', array);
        return (
            <FlatList
                style={styles.container}
                data={array}
                showsVerticalScrollIndicator={false}
                keyExtractor={extractKey}
                renderItem={this.renderItem.bind(this)}                
            />
        );
    }
}

const mapStateToProps = state => {
    // console.log('ui', state.reposReducers);
    return {
        reposList: state.reposReducers,
    };
};

export default connect(mapStateToProps)(NewFile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    itemParent: {
        backgroundColor: 'white',
        padding: 40,
        marginBottom: 5,
        flexDirection: 'row',
        // paddingBottom: 5,
    },
      
    item2: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    item3: {
        marginLeft: 100,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 20,
        color: 'blue'
    },
    itemstatus: {
        fontSize: 14,
       
    },
    itemstatus1: {
        fontSize: 14,
        marginLeft: 10,
        marginTop:5
    },
    itemstatus2: {
        fontSize: 14,
        marginRight: 25,
        marginTop:5
    }
   
})







