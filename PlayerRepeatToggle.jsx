import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { iconSizes } from '../constants/dimensions';
import { colors } from '../constants/colors';

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
        <MaterialCommunityIcons name={'repeat'} color={colors.iconSecondary} size={iconSizes.lg}/>
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;

const styles = StyleSheet.create({

});