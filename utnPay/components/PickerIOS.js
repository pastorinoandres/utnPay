import React from 'react';
import { Picker as PickerRN, View, Text, TouchableWithoutFeedback } from 'react-native';
import { _bgVerdeApp } from '../styles/globalStyles';

const PickerIOS = ({fkProps, items, setVisibility, name}) => {

    

    const { values, handleChange, errors, setFieldTouched, touched } = fkProps;
    
    
    return (
        <View style={[{position:'absolute', bottom:0, left:0, right:0, zIndex:10, height:300, justifyContent: 'center', alignItems:'center'},_bgVerdeApp]}>
            
                <TouchableWithoutFeedback onPress={setVisibility}>
                    <View style={{height:50,width:'100%',backgroundColor:'white',opacity:.4, justifyContent:'center'}}>
                        <Text style={{textAlign: 'right', fontSize:18, fontWeight:'600', paddingRight:10,}}>OK</Text>
                    </View>
                </TouchableWithoutFeedback>
            
            <PickerRN
                selectedValue={values[name]}
                style={{height: 250, width: '100%'}}
                onValueChange={handleChange(name)}
                itemStyle={{color: 'white', fontSize:26}}>
                {items.map((e)=>{
                    return (<PickerRN.Item label={e.label} value={e.value} key={e.value} />)
                })}
            </PickerRN>
        </View>
    );
};

export default PickerIOS;