import React from 'react';
import { Text, View } from 'react-native';

class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
          <Text style={{color:'white'}}>ProfileScreen!</Text>
        </View>
      );
    }
  }

  export default ProfileScreen;