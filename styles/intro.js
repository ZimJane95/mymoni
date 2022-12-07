import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";


export const styles= StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:Theme.sizes[1],
        paddingHorizontal:10,
        justifyContent: 'center',
        backgroundColor: Theme.colors.orange300,
    },
    mymonilogo:{
        alignItems: 'center'
    },
    logo:{
        width:30,
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: 'white',
        
        
    },
    mymonibrandname:{
        fontFamily: 'Lobster_400Regular',
        fontWeight: "bold",
        fontSize: 30,
        color: Theme.colors.purple700,
    },
    introTips:{
        
    },
    introtips:{
        fontFamily: 'Philosopher_700Bold',
        marginTop: 10,
        fontSize: Theme.fonts.fontSizePoint.title,
        textAlign: 'center',
        color: Theme.colors.purple700,
    },
    introImage:{
       
    },
    homeImage:{
        width: '100%',
        height: 250,
        marginVertical: 15,
    },
    input:{
        color: 'white',
        backgroundColor: Theme.colors.orange900,
        borderWidth: 2,
        borderColor: Theme.colors.purple700,
        width: 320,
        height: 40,
        textAlign: 'center',
       
        
    },
    inputs:{
        color: 'white',
        backgroundColor:Theme.colors.purple700,
        borderWidth: 2,
        borderColor: Theme.colors.purple700,
        width: 320,
        height: 40,
        textAlign: 'center',
        marginVertical: 5,   
    },
    signIn:{
        marginVertical: 10,
        marginHorizontal: 10,
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: Theme.sizes[5],
    },
    menuBox:{
        width: 80,
        height: 60,
        borderRadius: 5,  
    },


})