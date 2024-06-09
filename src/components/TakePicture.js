import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { Icon } from '@rneui/base'

const TakePicture = () => {
  return (
    <TouchableOpacity style = {styles.con} activeOpacity={0.65}>
      <Icon style={{alignSelf:"center"}} name = "photo-camera" color = {colors.aquaGreen} size = {40} />
    </TouchableOpacity>
  )
}

export default TakePicture

const styles = StyleSheet.create({
  con:{
    alignSelf:"center",
    backgroundColor:colors.coolBlue,
    borderRadius:1000,
    padding:"4%",
    borderWidth:3,
    borderColor:colors.clear,
    marginBottom: "7%",
  }
})