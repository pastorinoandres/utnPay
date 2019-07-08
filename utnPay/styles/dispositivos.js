import { Dimensions } from 'react-native';

const dimensiones = Dimensions.get('window');

export const actual = {
    width:dimensiones.height,
    height:dimensiones.width,
    aire: 20,
}

export const iphoneXSMax ={
    width:414,
    height:896,
    aire:20
}
export const iphoneX ={
    width:375,
    height:812,
    aire:10
}
export const iphone8 ={
    width:375,
    height:667,
    aire:10
}
export const iphoneSE={
    width:320,
    height:558,
    aire:10
}
export const pixel={
    width:411,
    height:731,
    aire:20
}
export const pixelXL={
    width:411,
    height:823,
    aire:20
}