import { View, Text, StyleSheet } from "react-native"

const Mobile=()=>{
    return(
        <>
        <View style={styles.container}>
            <Text>Mobile Page </Text>
        </View>
        </>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
       alignItems:"center",
        justifyContent:"center",
    }
})

export default Mobile;