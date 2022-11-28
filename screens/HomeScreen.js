import { useState, useEffect,useCallback } from 'react';
import {View, Text, Image } from 'react-native';
import { styles } from "../styles/homescreen";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { SafeArea } from '../utilities/AreaView';


export function HomeScreen(){
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



    return(
        +<SafeArea>
            <View style={styles.container}>
              <View style={styles.nav}>
                <Text style={styles.brandName}>mymoni</Text>
                <View style={styles.profile}>
                    <Image source={require('../assets/profile-pix.jpg')}
                    style={styles.profilePix}/>
                </View>
               </View>

               <View style={styles.homeContent}>
                  <View style={ styles.tipBlock}>
                    <Text style={styles.tipDate}>12 June 2022</Text>
                    <View style={styles.tipsDetails}>
                          <View style={styles.tipTextBlock}>
                             <Text style={styles.tip}> By age 25, you should have saved at least 0.5x your annual expenses. The more the better. In other words, If you spend $50,000 a year, you should have about $25,000 in your savings. If you spand $100,000 a year, you should have at least $50,000 in savings</Text>
                          </View>
                        <Image style={styles.tipImage} source={require('../assets/piggy-bank.jpg')}/>
                    </View>
                    <Text style={styles.previousTipsText}></Text>
                  </View>

                  <View style={ styles.fileTrans}>

                  </View>
                  <View style={ styles.upcoming}>

                  </View>
                  <View style={ styles.quizes}>

                </View>
              </View>
               
            </View>
        </SafeArea>
    )
    
    
}
