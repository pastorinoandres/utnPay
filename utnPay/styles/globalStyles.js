
import { StyleSheet } from 'react-native';
import { actual, iphoneSE, iphoneX, iphone8, iphoneXSMax, pixel, pixelXL } from './dispositivos'


let activacionSimulador;
let dispositivoElegido = iphoneXSMax;

if(dispositivoElegido === iphoneXSMax){
    activacionSimulador = false;
}else{
    activacionSimulador = true;
}


activacionSimulador = false;
export default activacionSimulador;
const { width, height, aire} = dispositivoElegido;
 

let prop1 = 220;
let prop2 = 30; 
if (height > 740){
    prop1 = 250;
    prop2 = 50;    
}

//constantes

const grisClaroApp = '#E5E5E5';
const verdeApp = '#27AE60';
const amarilloApp = '#EB5757';
const rojoApp = '#F2C94C';


const s = StyleSheet.create({

    simulador:{
        borderWidth: 1,
        borderColor: 'black',
        width: width,
        height: height,
        marginTop:50,
        marginLeft:2
    },
    header: {
        height : prop1 - (prop2+50),
        width:width,
        backgroundColor : '#27AE60',
        display: 'flex',
        paddingHorizontal: aire,
        // paddingTop: prop2 + 60,
        justifyContent: 'space-around'
    },
    headerProfile:{
        height: 360,
        width: width,
        display: 'flex',
    },
    photoProfile:{
        zIndex: 2,
        position:"absolute",
        height: 360,
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },    
    upContainer: {
        height : 180,
        backgroundColor : '#27AE60',        
        zIndex: 1,        
    },
    downContainer: {        
        flexBasis : 180,
        // position:"absolute",
        // height:180,
        // width:width,
        // top:180,
        // left:0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor : '#F2F2F2'
    },
    nameUser:{
        color: '#27AE60',
        fontSize: 28,
        fontWeight:"500",
        textAlign: 'center',
        paddingBottom: 55
    },   
    screen: {
        flex: 1       
    },
    titular:{
        color: 'white',
        fontSize: 30,
        fontWeight:"500"
    },    
    subTitular:{
        color: 'white',
        fontSize: 22,
        fontWeight:"300",
        paddingBottom: 7,
    },
    bigNumber:{
        color: 'white',
        fontSize: 45,
        fontWeight:"400"
    },
    link:{
        color: 'white',
        fontSize: 22,
        fontWeight:"200",
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
        textDecorationColor: "white",
        opacity: 0.8, 
    },
    small:{
        width: 40,
        height: 40,
        borderRadius: 20
    },
    medium:{
        width: 60,
        height: 60,
        borderRadius: 30
    },
    big:{
        width: 140,
        height: 140,
        borderRadius: 70
    },    
    border:{
        borderColor: '#828282',
        borderWidth: 0.5
    },
    item:{
        position:'relative',
        width: 130,
        height: 130,                
        borderRadius: 5,
        marginLeft:aire,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex'
    },
    nivel1:{        
        zIndex: 1,
        position:'absolute',
        width: 130,
        height: 130,
        justifyContent:'space-between',
        alignItems: 'center',
        padding:10,     
    },
    nivel2:{
        position:'absolute',
        zIndex: 10,
        width: 130,
        height: 130,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'

    },
    etiquetaContainer:{
        backgroundColor: '#F6B3B3',
        borderRadius:20,        
    },
    etiquetaTitle:{
        textAlign: 'center', 
        padding:8, 
        color: 'white',
        opacity:0.8
    },
    itemTitle:{
        color: '#27AE60',
        textAlign: 'center'
    },
    itemService:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    iconService:{
        width: 100,
        height: 100,
    },
    space:{
        width: 40,
        height: 40
    },
    primerLinea:{      
        height:prop2+50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: aire,

    },
    segundaLinea:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    terceraLinea:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listHorizontal:{
        paddingTop: 20,
        paddingBottom:10,
        height: 170,
    },
    disabled:{
        opacity:0.4
    },
    card: {
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleCard:{
        color: '#4F4F4F',
        fontSize: 20,
        fontWeight:"700",
        paddingVertical:25,
        textAlign: 'center'
    },
    list:{
        paddingHorizontal: aire,
    },
    transactionContainer:{
        flex:1,
        flexDirection:'row',
        height: 60,
        justifyContent: 'space-between',
        marginBottom:20
    },
    leftContainer:{        
        flexDirection:'row',
        justifyContent: 'flex-start'
    },
    rightContainer:{        
        flexDirection:'column',
        justifyContent: 'center'
    },
    transactionDescription:{        
        flexDirection:"column",
        justifyContent: 'center',
        marginLeft:20,
    },
    titleTransaction:{
        color: '#4F4F4F',
        fontSize: 17,
        fontWeight:"500",
        paddingBottom:10,
        textAlign: "left"
    },
    detailTransaction:{
        color: '#828282',
        fontSize: 16,
        fontWeight:"300",
        textAlign: "left"
    },
    priceTransaction:{
        color: '#333333',
        fontSize: 17,
        fontWeight:"600",
        textAlign: "right",
        
        paddingBottom:10,
    },
    dateTransaction:{
        color: '#828282',
        fontSize: 14,
        fontWeight:"300",
        textAlign: "right"
    },
    tochedZone:{
        position:'absolute',
        zIndex:10,
        // height:70,
        // width:70,
        padding:aire,
        marginTop:40,
        display: 'flex',        
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSection:{
        color: '#4F4F4F',
        fontSize: 20,
        fontWeight:"500",
        paddingBottom:25,
        textAlign: 'left',
        paddingLeft: aire,
    },
    itemCar:{
        width: 200,
        height: 270,                
        borderRadius: 15,
        marginLeft:aire,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        display: 'flex',
    },
    itemCarEmpty:{
        width: 200,
        height: 270,                
        borderRadius: 15,
        marginLeft:aire,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.4
    },
    headerCar:{
        flex:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    detailCar:{
        flex:3,
        padding:20,
        paddingTop:35
    },
    detailCarText:{
        color: '#4F4F4F',
        fontSize: 17,
        fontWeight:"500",
        paddingBottom:10,
        textAlign: "left"
    },
    listCar:{
        height: 300     
    },
    titleHeader:{
        paddingTop:120,
        padding: aire,
        textAlign: 'left'
    },
    cardQr: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:aire,
        paddingVertical:20,
        borderRadius:20,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical:40
    },
    dominioTxt:{
        fontSize:16,
        fontWeight:'400',
        color: '#4F4F4F',
        marginTop:10,
    },
    dominioLet:{
        fontSize:30,
        fontWeight:'800',
        color: '#333333',
        paddingTop:10,
    },
    bgVerdeApp:{
        backgroundColor: verdeApp
    },
    bgGrisClaroApp:{
        backgroundColor: grisClaroApp
    },
    headerFixed:{
        backgroundColor: verdeApp,
        width: width,
    },
    headerShowQr:{
        height:220
    },
    subZonaVerde:{
        backgroundColor: verdeApp,
        width: width,
        zIndex:-1,
        position:'absolute',
        height:300,
    }

});



export const _screen = s.screen; 
export const _header = s.header;
export const _titular = s.titular;
export const _subTitular = s.subTitular;
export const _bigNumber= s.bigNumber;
export const _link = s.link;
export const _small= s.small;
export const _medium= s.medium;
export const _big= s.big;
export const _border= s.border;
export const _item= s.item;
export const _itemTitle= s.itemTitle;
export const _iconService= s.iconService;
export const _itemService= s.itemService;
export const _space = s.space;
export const _primerLinea = s.primerLinea;
export const _segundaLinea = s.segundaLinea;
export const _terceraLinea = s.terceraLinea;
export const _listHorizontal = s.listHorizontal;
export const _disabled = s.disabled;
export const _card = s.card;
export const _titleCard = s.titleCard;
export const _list = s.list;
export const _transactionContainer = s.transactionContainer;
export const _leftContainer = s.leftContainer;
export const _rightContainer = s.rightContainer;
export const _transactionDescription = s.transactionDescription;
export const _titleTransaction = s.titleTransaction;
export const _detailTransaction = s.detailTransaction;
export const _priceTransaction = s.priceTransaction;
export const _dateTransaction = s.dateTransaction;
export const _nivel1 = s.nivel1;
export const _nivel2 = s.nivel2;
export const _etiquetaContainer = s.etiquetaContainer;
export const _etiquetaTitle = s.etiquetaTitle;
export const _headerProfile = s.headerProfile;
export const _photoProfile = s.photoProfile;
export const _upContainer = s.upContainer;
export const _downContainer = s.downContainer;
export const _nameUser = s.nameUser;
export const _tochedZone = s.tochedZone;
export const _simulador= s.simulador;
export const _titleSection = s.titleSection;
export const _itemCar = s.itemCar;
export const _itemCarEmpty = s.itemCarEmpty;
export const _headerCar = s.headerCar;
export const _detailCar = s.detailCar;
export const _detailCarText = s.detailCarText;
export const _listCar = s.listCar;
export const _titleHeader = s.titleHeader;
export const _cardQr = s.cardQr;
export const _dominioTxt = s.dominioTxt;
export const _dominioLet = s.dominioLet;
export const _bgVerdeApp = s.bgVerdeApp;
export const _bgGrisClaroApp = s.bgGrisClaroApp;
export const _headerFixed = s.headerFixed;
export const _headerShowQr = s.headerShowQr;
export const _subZonaVerde = s.subZonaVerde;

