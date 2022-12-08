import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn} from './SignIn';
import { SignUp } from './Signup';
import { About } from './About';
import { Home} from './HomeScreen';
import { AddExpense} from './AddExpense';
import { AddIncome} from './AddIncome';
import { Intro } from './Intro';
import { Quizes} from './Quizes';
import { History } from './History';
import { Incomehistory } from './Incomehistory';


const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Add Income" component={AddIncome} options={{headerShown:true}}/>
            <Stack.Screen name="Add Expense" component={AddExpense} options={{headerShown:true}}/>
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Quizes" component={Quizes}/>
            <Stack.Screen name="History" component={History}/>
            <Stack.Screen name="Incomehistory" component={Incomehistory}/>
        </Stack.Navigator>
    )
}