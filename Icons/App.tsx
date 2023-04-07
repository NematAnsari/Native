import { Text, View } from "react-native"
// import Icons from "react-native-vector-icons/Feather"
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Components/Home";
import Payment from "./Components/Payment";
import Support from "./Components/Support";
import Setting from "./Components/Settting";
import About from "./Components/About";
import Mobile from "./Components/Mobile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SheetProvider } from "react-native-actions-sheet";
import CreateAccount from "./Components/CreateAccount";
import "./Components/Sheets"

const App=()=>{
  const Drawer = createDrawerNavigator();
  return(
    <>
    <SheetProvider>

     <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
         
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Payment" component={Payment}/>
        <Drawer.Screen name="Support" component={Support}/>
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Mobile" component={Mobile}/>
        <Drawer.Screen name="Create Account" component={CreateAccount}/>
        
        
        
      </Drawer.Navigator>
     </NavigationContainer>
    </SheetProvider>
    </>
  )
}

export default App;



// <View>
// <Text>Hello</Text>
// <Icons name="phone" size={70} color=""/>
// </View>