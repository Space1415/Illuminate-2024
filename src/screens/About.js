import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import colors from '../constants/Colors'
import CustomText from '../components/CustomText'

const About = ({navigation}) => {
  return (
    <>
    <SafeAreaView backgroundColor = "white" />
    <View style = {styles.con}>
      <View style = {styles.topRow}>
        <TouchableOpacity activeOpacity={0.65} onPress={() => navigation.goBack()} style = {{position:"absolute", left:"7%", top:"5%"}}> 
          <Icon  name = "arrow-back" type = "ionicons" size={35} color={colors.coolBlue} />
        </TouchableOpacity>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-Bold"} color = {"coolBlue"} fontSize = {35}>Credits</CustomText>
        <View style = {{height:"5%", width:"85%", backgroundColor:colors.coolBlue, borderRadius:100, marginVertical:"2%"}}/>
      </View>
      <View style = {styles.section} >
        <CustomText alignSelf={"center"} fontFamily={"Lexend-SemiBold"} color = {"aquaGreen"} fontSize = {22} width = "80%" textAlign={"center"}> Mobile App Development</CustomText>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-Medium"} color = {"gray"} fontSize = {17} width = "90%" textAlign={"center"}>
            Chikaosolu Nnadozie
        </CustomText>
      </View>
      <View style = {styles.section}>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-SemiBold"} color = {"aquaGreen"} fontSize = {22} width = "80%" textAlign={"center"}>AI Modeling</CustomText>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-Medium"} color = {"gray"} fontSize = {17} width = "90%" textAlign={"center"}>
           Rishith Doddi
        </CustomText>
      </View>
      <View style = {styles.section}>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-SemiBold"} color = {"aquaGreen"} fontSize = {22} width = "80%" textAlign={"center"}>Uuser Interface Design</CustomText>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-Medium"} color = {"gray"} fontSize = {17} width = "90%" textAlign={"center"}>
            Rohan Sahoo
        </CustomText>
      </View>
      <View style = {styles.section}>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-SemiBold"} color = {"aquaGreen"} fontSize = {22} width = "80%" textAlign={"center"}>User Interface Design</CustomText>
        <CustomText alignSelf={"center"} fontFamily={"Lexend-Medium"} color = {"gray"} fontSize = {17} width = "90%" textAlign={"center"}>
            Adrian DeGendt
        </CustomText>
      </View>
    </View>
    </>
  )
}

export default About

const styles = StyleSheet.create({
  con:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  topRow:{
    flexDirection: "row",
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center",
    marginTop:"30%",
    width:"100%",
    position:"absolute",
    top:"0%",
  },
  section:{
    margin:"-40%"
  }
})


