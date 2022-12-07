import { View, Text, FlatList, TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-paper';
import { Incometrans } from '../components/coHost';
import { styles } from '../styles/history';
import { SafeArea } from '../utilities/AreaView';

export function Incomehistory({navigation}){
    // const {email,setEmail,fullName} = useContext(AppContext)
    return(
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.transHeadLine}>
                    <Text style={styles.transHis}>Transaction History</Text>
                </View>

                
                <View style={styles.historyBlock}>
                    <FlatList
                        data={Incometrans}
                        renderItem={({item}) =>{
                            return(
                                <TouchableOpacity style={styles.transDetails}>
                                    <View style={styles.incomeInfo}>
                                        <Text style={styles.userGross}>{item.transPurpose}</Text>
                                        <Text style={styles.userAmount}>{item.transAmount}</Text>
                                        <Text style={styles.userDate}>{item.transDate}</Text>
                                        <Text style={styles.userStamp}>1 hour ago</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                        }
                    />
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