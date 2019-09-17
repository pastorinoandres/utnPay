import React from 'react'
import { View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
deviceWidthSelect = 414
const alfa = deviceWidth / deviceWidthSelect

const Line = ({color='#828282',grosor=2,margin=0}) => {
    return (
        <View style={{borderBottomColor:color,borderBottomWidth:grosor,borderStyle:'solid',height:10,width:'100%',marginVertical:margin}}></View>
    )
}





export default Line
