import React, { Component } from 'react';
import Card from './Card';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';




class PickerList extends Component{

    
    _onPressItem = (item)=>{

        const { onValueChange, setVisibility } = this.props;
        onValueChange(item.value);
        setVisibility();

        // const copylist = [...this.state.data];
        // const listMap = copylist.map((i)=>{
        //     return{...i, selected:(i===item)}                 
        // })
        // this.setState({data:listMap})
    }

    _listItem = ({item})=>{
        
        return(
            <TouchableOpacity onPress={()=>this._onPressItem(item)}>
                <Text style={(item.selected)?styles.selected:styles.item}>{item.label}</Text>
                <View style={styles.linea} />
            </TouchableOpacity>
        )
    }
    
    _keyExtractor = (item, index) => `${index}-${item.label}`;


    render(){

        const {setVisibility, items, name, selectedValue } = this.props

        const data = items.map((item)=>{
            return {...item, selected:(item.value === selectedValue)}
        })

        return (
            <Card onCloseFn={setVisibility}>
                <View style={{width:'100%', flex:1, justifyContent:'center', alignItems:'center',overflow:'hidden'}}>
                    <Text style={styles.title}>{`Seleccione ${name}`}</Text>
                    <View style={{width:'100%'}}>
                        <FlatList
                            data={data}
                            renderItem={this._listItem}
                            keyExtractor={this._keyExtractor}
                        />              
                    </View>
                </View>       
            </Card>
        );

    }
};

export default PickerList;



const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'700',
        paddingBottom:30,
        paddingTop:60       
    }, 
    item:{
        paddingVertical:15,
        fontSize:18,
        textAlign:'center',
        color:'rgba(0,0,0,0.5)'
    },
    selected:{
        paddingVertical:15,
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'#27AE60'
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 1,
    },
})