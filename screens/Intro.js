import { View, Text, Image, TextInput  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
import { styles } from '../styles/intro';
import { Entypo, Feather,FontAwesome5 } from '@expo/vector-icons';


export function Intro({navigation}){
    let word = "Sign In"
    let words = "Get Started"
    return(
        <SafeArea> 
            <View style={styles.container}>
                <View style={styles.mymonilogo}>
                    <Entypo name="medium-with-circle" size={24} color="black" style={styles.logo} />
                    <Text style={styles.mymonibrandname}>mymoni</Text>

                    <View style={styles.introTips}>
                        <Text style={styles.introtips}>Secure your Future</Text>
                    </View>
                </View> 

                <View style={styles.introImage}>
                    <Image source={require('../assets/istockphoto-brown.jpg')} style={styles.homeImage}/>
                </View>

                <View style={styles.signIn}>
                    <Button style={styles.input} mode='contained'onPress={() => navigation.navigate('SignIn')}> Sign Up</Button>
                    <Button style={styles.inputs} mode='contained'onPress={() => navigation.navigate('SignIn')}> Sign In</Button>
                    {/* <TextInput placeholder={word} style={styles.input}/>
                    <TextInput placeholder={words} 07087777367style={styles.inputs}/> */}
                </View>

                <View style={styles.flex}>
                    <View style={styles.flex1}>
                        <Image source={require('../assets/contactUs.jpg')} style={styles.menuBox}/>
                        <Text>Contact Us</Text>
                    </View>  
                    <View style={styles.flex2}>
                        <Image source={require('../assets/getAWallet.jpg')} style={styles.menuBox}/>
                        <Text>Get a Wallet</Text>
                    </View>  
                    <View style={styles.flex3}>
                        <Image source={require('../assets/learnMore.jpg')} style={styles.menuBox}/>
                        <Text>Learn More</Text>
                    </View>  
                </View>
            </View>   

            <View>
                
            </View>
        </SafeArea>
    )
}