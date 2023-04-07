import Icons from "react-native-vector-icons/FontAwesome"
import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Switch, Pressable, Image } from "react-native";
import {Formik} from "formik";
import {SheetManager} from "react-native-actions-sheet"
import * as Yup from "yup";
const CreateAccount = () => {
    const [terms, setTerms] = useState(false);
    const initialValues = {
        Name: "",
        Email: "",
        Contact: "",
        Password: "",
        ConfirmPassword: "",
        Terms: false,
    }
    const validationSchema = Yup.object().shape({
        Name: Yup.string().min(2, "Too Short").max(10, "Too Long").required("Name Required"),
        
        Email: Yup.string().email("Invalid Email").required("Email address Required"),
        Contact: Yup.string().min(10, "Too Short").max(11, "Too Long").required("Number Required"),
        Password:Yup.string().required("Required"),
        ConfirmPassword:Yup.string().required("required").oneOf([Yup.ref("Password"),""],"Password must match"),
        
        Terms: Yup.string().required("Terms & condition required").oneOf(["true", "false"]),
    })
    const [image,setImage] = useState<any>()
    const ActionSheetOpen=async()=>{
        
        const value = await SheetManager.show("Profile")
        setImage(value);
        
    }
    return (
        <ScrollView>
            <View>
                <View  ><Text style={styles.heading}>Create Account </Text></View>

                <Pressable onPress={ActionSheetOpen}  style={{ marginLeft: 120, marginBottom: 10 }}>
                    
                    {image?<Image style={{width:200,height:200,borderRadius:100, borderWidth:1,borderColor:"red"}} source={{uri:image}}/>:<Icons name="user" size={200} color="grey"/>}
                    
                </Pressable>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => { console.log(JSON.stringify(values)) }}>
                    {({setFieldValue, handleChange, handleSubmit, handleBlur, touched, errors, values}) => (



                        <View>



                            <View>
                                <TextInput value={values.Name} onBlur={handleBlur("Name")} onChangeText={handleChange("Name")} style={styles.input} placeholder="Enter Name" />
                                <Text style={styles.error}>{touched.Name && errors.Name ? (<Text>{errors.Name}</Text>) : ""}</Text>
                            </View>

                            <View>
                                <TextInput value={values.Email} onBlur={handleBlur("Email")} onChangeText={handleChange("Email")} style={styles.input} placeholder="Email Address" keyboardType="default" />
                                <Text style={styles.error}>{touched.Email && errors.Email ? (<Text>{errors.Email}</Text>) : ""}</Text>
                            </View>
                            <View>
                                <TextInput value={values.Contact}  onBlur={handleBlur("Contact")} onChangeText={handleChange("Contact")} style={styles.input} placeholder="Enter Contact" keyboardType="numeric" />
                                <Text style={styles.error}>{touched.Contact && errors.Contact ? (<Text>{errors.Contact}</Text>) : ""}</Text>
                            </View>

                            <View>
                                <TextInput secureTextEntry={true} onBlur={handleBlur("Password")} value={values.Password} onChangeText={handleChange("Password")} style={styles.input} placeholder="Password" keyboardType="default" />
                                <Text style={styles.error}>{touched.Password && errors.Password ? (<Text>{errors.Password}</Text>) : ""}</Text>
                            </View>

                            <View>
                                <TextInput secureTextEntry={true} onBlur={handleBlur("ConfirmPassword")} value={values.ConfirmPassword} onChangeText={handleChange("ConfirmPassword")} style={styles.input} placeholder="Confirm Password" keyboardType="default" />
                                <Text style={styles.error}>{touched.ConfirmPassword && errors.ConfirmPassword ? (<Text>{errors.ConfirmPassword}</Text>) : ""}</Text>
                            </View>

                            <View >
                                <Switch style={{ marginRight: 365, alignItems: "flex-start" }} onChange={() => setTerms(!terms)}onValueChange={(value) => setFieldValue("Terms", value)} value={values.Terms} />
                                <Text style={{ marginLeft: 60, fontWeight: "bold", marginTop: -23, marginBottom: 18 }}>Please Accept Terms and Conditions</Text>
                                <Text style={styles.error}>{touched.Terms && errors.Terms ? (<Text>{errors.Terms}</Text>) : ""}</Text>

                            </View>


                            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                                <Text style={{ color: "white", marginLeft: 150, fontWeight: "bold", letterSpacing: 5 }}>Login</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    heading: { margin: 20, marginLeft: 130, fontWeight: "bold", fontSize: 20 },
    text: { fontSize: 18, fontWeight: "bold", marginLeft: 20 },
    input: { borderWidth: 1, borderRadius: 20, fontSize: 17, marginTop: 5, margin: 10, justifyContent: "center" },
    btn: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "green",
        color: 'white',
        padding: 13,
        borderRadius: 20,

        margin: 10,

    },
    error:{
        marginLeft:10,
        marginTop:-5,
        color:"red"
    }

})

export default CreateAccount;