import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import authApi from '../api/auth.js' 


const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function handleSubmit1(){
    try {
    const result = await authApi.register(name,email,password)
    console.log(result.data);
    if(result){
      navigation.navigate("Plan")
    }
    
  } catch (error) {
    alert("User exits or error in register")
    console.log(error.message);
  }
}
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>

        <View style={{ width: 320, marginTop: 45 }}>
        <Input
            value={name}
            onChangeText={(text) => setName(text)}
            type="text"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Name"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />

          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            type="password"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
            placeholderTextColor={"white"}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
        </View>
            
        <Pressable
        disabled={!email && !password}
          onPress={handleSubmit1}
          style={
            password.length >= 8
              ? {
                  width: 300,
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                }
              : {
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 14,
                }
          }
        >
          <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}
          >
            Register
          </Text>
          </TouchableOpacity>
        </Pressable>
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
