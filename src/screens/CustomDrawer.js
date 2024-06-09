
import React, {useState} from 'react';
import { View , SafeAreaView, StyleSheet} from 'react-native';
import CustomText from "../components/CustomText"
import version from "../constants/Version"
import { Dropdown } from 'react-native-element-dropdown';

const CustomDrawerContent = (props) => {

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Hindi', value: 'hi' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  return (  
    <>
    <SafeAreaView backgroundColor = "white"/>
    <View style = {styles.con} {...props}>
        <CustomText alignSelf={"flex-start"} fontFamily={"Lexend-SemiBold"} color = {"coolBlue"} fontSize = {30} paddingTop={"10%"}>
            Settings
        </CustomText>
        <CustomText alignSelf={"flex-start"} fontFamily={"Lexend-Medium"} color = {"aquaGreen"} fontSize = {20} paddingTop={"10%"}>
            Choose Language
        </CustomText>
        <Dropdown
        style = {{alignSelf:"flex-start"}}
          data={languages}
          labelField="label"
          valueField="value"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          containerStyle={styles.dropdownContainer}
          labelStyle={styles.dropdownLabel}
          textStyle={styles.dropdownText}
        />
        <CustomText alignSelf={"flex-start"} fontFamily={"Lexend-SemiBold"} color = {"gray"} fontSize = {20} position={"absolute"} top = "95%">
            {version}
        </CustomText>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    con:{
        flex:1,
        alignItems:"center",
        marginHorizontal:'5%',
    },
    dropdownContainer: {
        width: '50%',
        marginTop: 20,
    },
    dropdownLabel: {
        color: 'black', 
    },
      dropdownText: {
        color: 'black', 
      },
})

export default CustomDrawerContent;
