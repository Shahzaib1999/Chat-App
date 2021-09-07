import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import Logo from '../../../assets/icons/logo.png';
import {colors} from '../../../services/utilities/colors';
import {AnimatedWrapper, ButtonColored} from '../../../components';
import {styles} from './style';

const Welcome = () => {
  return (
    <LinearGradient colors={colors.appBgColorGradiant} style={styles.container}>
      <View>
        <Animatable.Image
          animation="fadeInDown"
          style={styles.logo}
          source={Logo}
        />
      </View>
      <AnimatedWrapper
        animation="fadeIn"
        delay={700}
        duration={2000}
        style={styles.textWrapper}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.appText}>ChatApp</Text>
      </AnimatedWrapper>
      <AnimatedWrapper
        animation="fadeIn"
        delay={700}
        duration={2000}
        style={styles.policyWrapper}>
        <Text style={styles.privacyText}>
          Read our PrivacyPolicy Tap "Agree & Continue"
        </Text>
        <Text style={styles.termsText}>to accept the Terms of Service</Text>
        <ButtonColored
          text="Agree & Continue"
          buttonStyle={styles.agreeBtn}
          textStyle={styles.agreetext}
          tintColor={colors.appColor1}
        />
      </AnimatedWrapper>
    </LinearGradient>
  );
};

export default Welcome;
