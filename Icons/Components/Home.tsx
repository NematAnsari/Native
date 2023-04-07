import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Homes from "../Tab/Home";
import Abouts from "../Tab/About";

const Home =()=>{
    const Tab = createBottomTabNavigator();
    return(
        <>
        {/* <Tab.Navigator
        >
            <Tab.Screen name="HomeT" component={Homes} options={{headerShown:false}}/>
            <Tab.Screen name="AboutTab" component={Abouts}/>
        </Tab.Navigator>
         */}
         <View><Text>Home</Text></View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Home;