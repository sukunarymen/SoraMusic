import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontSize, iconSizes } from '../constants/dimensions';
import { fontsFamilies } from '../constants/fonts';
import { spacing } from '../constants/dimensions';
import { GotoPreviousButton } from './PlayerControl';
import { PlayPauseButton } from './PlayerControl';
import { GotoNextButton } from './PlayerControl';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import MovingText from './MovingText';
import { useNavigation } from '@react-navigation/native';

const imageUrl= "https://linkstorage.linkfire.com/medialinks/images/92ffbc67-fdd1-46e9-b336-8a2e0297ffce/artwork-440x440.jpg";
const FloatingPlayer = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const handleOpenPlayerScreen = ()=> {
    navigation.navigate("PLAYER_SCREEN")
  };
  return (
    <View>
      <View style={{ zIndex:1 }}>
        <Slider
        style={styles.container}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          maximumTrackTintColor: colors.maximumTintColor,
          minimumTrackTintColor: colors.minimumTintColor,
        }}
        containerStyle = {{
          ///height: 10,
        }}
        />
      </View>
      <TouchableOpacity activeOpacity={0.85} onPress={handleOpenPlayerScreen} style={styles.container}>
      <Image source={{uri:imageUrl}} style={styles.coverImage}/>
      <View style={styles.titleContainer}>
        < MovingText
        text={'On and On'}
        animationThreshold={15}
        style={styles.title} />
      {/*<Text style={styles.title}>On and On</Text>*/}
      <Text style={styles.artist}>BAYZY, Sayfro</Text>
      </View>
      <View style={styles.PlayerControlContainer}>
        <GotoPreviousButton size={iconSizes.md}/>
        <PlayPauseButton size={iconSizes.md}/>
        <GotoNextButton size={iconSizes.md}/>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm,
        overflow: "hidden",
        marginLeft: spacing.sm,
        marginRight: spacing.lg,
    },
    title:{
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontFamily: fontsFamilies.medium,
    },
    artist:{
      color: colors.textSecondary,
    },
    PlayerControlContainer: {
      flexDirection: 'row',
      alignItems: "center",
      gap: 20,
      paddingRight: spacing.lg,
    },
});