import React, { Fragment, useState } from 'react';
import { TextInput, View, StyleSheet, Text, Picker as PickerRN, Platform } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerModal from './../modals/PickerModal';




const Field = props => {

    const { fkProps, name, keyboardType, ph, picker=false, items=[]} = props;
    const { values, handleChange, errors, setFieldTouched, touched } = fkProps;

    const [ visibility, setVisibility] = useState(false)

    const activeModal = ()=>{

      if(picker){
        setVisibility(true)
      }
    }


    const phStyle =  ((!values[name]) && picker)?{color:'grey'}:{}

    

    const pickerPlatform = (

      <Fragment>
        <TouchableWithoutFeedback onPress={activeModal}>
          <Text style={[styles.textInput, phStyle]}>
            {values[name] || ph}
          </Text>
        </TouchableWithoutFeedback>
        <PickerModal fkProps={fkProps} name={name} items={items} visibility={visibility} setVisibility={()=>setVisibility(false)}/>        
      </Fragment>
    );

    // const pickerANDROID = (

    //   <PickerRN
    //       selectedValue={values[name]}
    //       style={styles.pickerANDROID}
    //       onValueChange={handleChange(name)}
    //       itemStyle={{color: 'white', fontSize:26}}>
    //       {items.map((e)=>{
    //           return (<PickerRN.Item label={e.label} value={e.value} key={e.value} />)
    //       })}
    //   </PickerRN>
    // )


    const inputText = (

        <TextInput 
          style={styles.textInput}
          placeholder={ph}
          placeholderTextColor='grey'
          keyboardType={keyboardType}
          onBlur={() => {setFieldTouched(name)}}
          value={values[name]}
          onChangeText={handleChange(name)}
          secureTextEntry={(name==='password')}>
        </TextInput>
    )


    const input = (picker)? pickerPlatform : inputText;

      return(
        <Fragment>

          <View style={styles.containerInput}>            
                    
            {input}

            <View style={styles.linea} />
            {touched[name] && errors[name] &&
              <Text style={styles.errors}>{errors[name]}</Text>
            }

          </View>

        </Fragment>
      )
    
}



const styles = StyleSheet.create({
    containerInput:{
        marginBottom: 16,
        width:'100%'
    },
    textInput: {
        fontSize:18, 
        paddingVertical: 5 
    },
    pickerInput:{
      marginBottom: 16,
      width:'100%',
      height:60
    },
    pickerANDROID:{      
      width:'100%',
      fontSize:18,
      padding: 0,
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2,
        marginTop:10
    },
    errors: {
      fontSize: 16, 
      color: 'red' 
    },
  })

export default Field;


