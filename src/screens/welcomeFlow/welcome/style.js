import {Dimensions} from 'react-native';
import {colors, sizes, fontFamily, fontSize} from '../../../services';

const {StyleSheet} = require('react-native');
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: sizes.images.logo,
    height: sizes.images.logo,
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.snow,
    fontSize: fontSize.h5,
  },
  appText: {
    fontFamily: fontFamily.appTextBold,
    color: colors.snow,
    fontSize: fontSize.h1,
  },
  policyWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  privacyText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.snow,
    fontSize: fontSize.regular,
  },
  termsText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.snow,
    fontSize: fontSize.regular,
  },
  agreeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
    backgroundColor: colors.snow,
    marginTop: height * 0.04,
  },
  agreetext: {
    fontFamily: fontFamily.appTextBold,
    fontSize: fontSize.extraLarge,
  },
});
