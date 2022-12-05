import { useContext } from 'react';
import { AppContext } from '../globals/AppContext';
import { View, Text,  } from 'react-native';
import { styles } from '../styles/history';
import { SafeArea } from '../utilities/AreaView';
import { Button, TextInput } from 'react-native-paper';

export function History({navigation}){
    const {email,setEmail,fullName} = useContext(AppContext)
    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.transHeadLine}>
                    <Text style={styles.transHis}>Transaction History</Text>
                </View>

                <View style={styles.transOptions}>
                <Button style={styles.expense} mode='contained'>Expenses</Button>
                <Button style={styles.income} mode='contained'>Income</Button>
                </View>
            </View>
            {/* <View>
                <Text>{fullName}</Text>
                <TextInput placeholder='Enter your new email' 
                onChangeText={(text)=> setEmail(text)}/>

                <Button mode='contained'>{email}</Button>
            </View> */}
        </SafeArea>
    )
}