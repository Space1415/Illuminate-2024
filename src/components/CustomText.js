import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'

const CustomText = ({ children, alignSelf, fontSize, color, fontFamily, width, textAlign, position, left, top, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight }) => {
  return (
    <Text style={{
      alignSelf: alignSelf,
      fontSize: fontSize,
      color: colors[color],
      fontFamily: fontFamily,
      width: width,
      textAlign: textAlign,
      position: position,
      left: left,
      top: top,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
    }}>
      {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({

})
