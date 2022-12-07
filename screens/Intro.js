import { useState, useEffect,useCallback } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
import { styles } from '../styles/intro';
import { Entypo, Feather,FontAwesome5 } from '@expo/vector-icons';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import * as Font from 'expo-font';


export function Intro({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
    async function prepare() {
      try {
          await Font.loadAsync({Lobster_400Regular,Philosopher_700Bold});
          await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     
      await SplashScreen.hideAsync();
    }
  },  [appIsReady]);

  if (!appIsReady) {
    return null;
  }

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
                    <TouchableOpacity>
                        <View style={styles.flex1}>
                            <Image source={require('../assets/contactUs.jpg')} style={styles.menuBox}/>
                            <Text>Contact Us</Text>
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.flex2}>
                            <Image source={require('../assets/getAWallet.jpg')} style={styles.menuBox}/>
                            <Text>Get a Wallet</Text>
                        </View> 
                    </TouchableOpacity> 

                    <TouchableOpacity>
                        <View style={styles.flex3}>
                            <Image source={require('../assets/learnMore.jpg')} style={styles.menuBox}/>
                            <Text>Learn More</Text>
                        </View>
                    </TouchableOpacity>  
                </View>
            </View>   

            <View>
                
            </View>
        </SafeArea>
    )
}