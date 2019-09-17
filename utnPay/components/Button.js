import React from 'react'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'


const deviceWidth = Dimensions.get('window').width
deviceWidthSelect = 414
const alfa = deviceWidth / deviceWidthSelect

const Button = ({onPressFn, textButton, _bgButton={backgroundColor: 'green'}, disabled}) => {
    return (
        <TouchableOpacity onPress={onPressFn} style={{flexDirection: 'row', marginBottom:15}}>
            <View style={[{flex:1,flexDirection: 'row',height: 50, justifyContent: 'center', alignItems: 'center',borderRadius:5, opacity:disabled?0.5:1},_bgButton]}>
                <Text style={{color:'white', fontSize:18}}>{textButton}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default Button