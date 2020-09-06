import React from 'react';
import {View, Text, Image} from 'react-native'


// import githubLogo from '../../assets/images/';

const Header = () => (
  <View>
    {/* <img src={githubLogo} alt="Github logo" /> */}
    <Image
        // style={styles.tinyLogo}
        source={require('../assets/logo-github.png')}
    />
  </View>
);


export default Header;
