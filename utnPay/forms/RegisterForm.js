import React, { Component, Fragment } from 'react';
import {Alert, PickerIOS, View} from 'react-native'
import Button from './../components/Button'
import Field from './../components/Field';
import * as yup from 'yup'
import { Formik } from 'formik'
import { _bgVerdeApp } from './../styles/globalStyles'


class RegisterForm extends Component {



  render() {

    const ocupaciones=[
      {
          label:'Estudiante',
          value:'Estudiante'
      },
      {
          label:'Docente',
          value:'Docente'
      },
      {
          label:'No docente',
          value:'No docente'
      },
      {
          label:'Otro',
          value:'Otro'
      },
  ]

  const carreras=[
    {
        label:'Sistemas',
        value:'Sistemas'
    },
    {
        label:'Industrial',
        value:'Industrial'
    },
    {
        label:'Quimica',
        value:'Quimica'
    },
    {
        label:'Civil',
        value:'Civil'
    },
    {
      label:'Electrica',
      value:'Electrica'
    },
    {
      label:'Mecanica',
      value:'Mecanica'
    }
]


    return (
      <Formik
        initialValues={{ 
          full_name:'',
          dni: '',
          password: '',
          email:'',
          cargo:'',
          carrera:'' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          full_name: yup
            .string()
            .required('Es campo requirido'),
          dni: yup
            .string()
            .required('Es campo requirido')
            .min(8,'Debe tener al menos 8 digitos'),
          email: yup
            .string()
            .email()
            .required('Es campo requirido'),
          cargo: yup
            .string()
            .required('Es campo requirido'),
          carrera: yup
            .string()
            .required('Es campo requirido'),
          password: yup
            .string()
            .min(6,'Debe tener al menos 6 caracteres')
            .required('Es campo requirido'),
        })}
      >
        {(props) => (
          <Fragment>
            <Field fkProps={props} name='full_name' keyboardType='twitter' ph='Su nombre completo' />
            <Field fkProps={props} name='dni' keyboardType='number-pad' ph='Su DNI'/>
            <Field fkProps={props} name='email' keyboardType='default' ph='Su correo electronico'/>
            <Field fkProps={props} name='cargo' keyboardType='default' ph='Su ocupación, ej: estudiante' picker items={ocupaciones} />
            <Field fkProps={props} name='carrera' keyboardType='default' ph='Si aplica, su carrera' picker items={carreras} />
            <Field fkProps={props} name='password' keyboardType='default' ph='Una contraseña segura'/>
            <View style={{height:60}}></View>
            <Button 
              onPressFn={props.handleSubmit} 
              textButton= 'Confirmar datos' 
              _bgButton={_bgVerdeApp}
              disabled={!props.isValid}>
            </Button>           
          </Fragment>
        )}
      </Formik>
    );
  }
}

export default RegisterForm
