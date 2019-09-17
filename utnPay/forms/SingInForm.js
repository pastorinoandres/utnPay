import React, { Component, Fragment } from 'react';
import {Alert} from 'react-native'
import Button from './../components/Button'
import Field from './../components/Field';
import * as yup from 'yup'
import { Formik } from 'formik'
import { _bgVerdeApp } from './../styles/globalStyles'


class SignInForm extends Component {

  render() {
    return (
      <Formik
        initialValues={{ dni: '', password: '' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          dni: yup
            .number('Solo se admiten números')
            .positive('Dato no válido')
            .integer('Solo se admiten números')
            .required('Es campo requirido'),
          password: yup
            .string()
            .min(6)
            .required('Es campo requirido'),
        })}
      >
        {(props) => (
          <Fragment>
            <Field fkProps={props} name='dni' keyboardType='number-pad' ph='Dni'/>
            <Field fkProps={props} name='password' keyboardType='default' ph='Contraseña'/>
            <Button 
              onPressFn={props.handleSubmit} 
              textButton= 'Ingresar con mi dni' 
              _bgButton={_bgVerdeApp}
              disabled={!props.isValid}/>
          </Fragment>
        )}
      </Formik>
    );
  }
}

export default SignInForm