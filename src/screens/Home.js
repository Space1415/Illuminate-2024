import { StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from "../constants/Colors"
import TakePicture from "../components/TakePicture"
import CustomText from '../components/CustomText'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const nav = useNavigation()

  return (
    <>
    <SafeAreaView backgroundColor = "white" />
    <View style = {styles.con}>
      <View style = {styles.topBar}>
        <TouchableOpacity style = {{position:"absolute", left:"0%"}} activeOpacity={0.65} onPress={() => nav.navigate("About")}>
          <Icon name = "info" size = {30} color = {colors.coolBlue} />
        </TouchableOpacity>
        <Image source={require("../assets/images/Logo.png")} style = {styles.logo} />
      </View>
      <CustomText alignSelf={"center"} fontFamily={"Lexend-Medium"} color = {"clear"} fontSize = {16}>
        Click the camera icon to take a picture!
      </CustomText>
      <TakePicture/>
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "white",
    justifyContent:"space-between",
  },
  topBar: {
    flexDirection: "row",
    alignItems:"center",
    marginHorizontal: "6%",
    marginTop:"4%",
    width:"90%",
    height:"5%",
    alignSelf:"center",
    justifyContent:"center",
  },
  logo:{
    transform: [{
      scale:0.3
    }],
  }
});
