//info: Función que retorna una transacción, en base a la patente pasada por parametro y una
//      clave autogenerada a partir de la fecha actual.

//dependecies
import moment from 'moment';
import 'moment/locale/es';

const parkingPrice = 15; //pesos argentinos
const today = `${moment().format('D')} de ${moment().format('MMMM')}`;

export default function createTransaction(domain){

    return{
        category:'Estacionamiento',
        playa: 'Calle 126 e/ 59 y 60',
        title: 'Pagaste estacionamiento', 
        icon: require('./../assets/images/auto.png'),
        detalle: domain,
        fecha: today,
        precio: parkingPrice,
        key: `${today}-${domain}-${moment().format('YYYY')}`
    }
}
