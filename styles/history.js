import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";

export const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Theme.colors.orange500,
    },
    transHeadLine:{
       marginTop: Theme.sizes[8]
    },
    transHis:{
        textAlign: 'center'
    },
    transOption:{
        marginTop: Theme.sizes[6]
    },
    expense:{
        color: 'white',
        backgroundColor: Theme.colors.redAltYellow,
        borderWidth: 2,
        borderColor: Theme.colors.purple700,
        width: 150,
        height: 40,
        textAlign: 'center',
    },
    income:{
        color: 'white',
        backgroundColor: Theme.colors.greenAltYellow,
        borderWidth: 2,
        borderColor: Theme.colors.purple700,
        width: 150,
        height: 40,
        textAlign: 'center',
    },
})