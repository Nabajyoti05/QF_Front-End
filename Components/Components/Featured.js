import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';


class Featured extends React.Component {
  state={
    renderItems: [{
      v1:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
      v2:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      v3:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      v4:'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg',
      v5:'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689'
    }]
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
          {/* <Text style={{color:'white'}}>Featured!</Text> */}
          <FlatList>
              {/* // data={this.state.renderItems} 
              // renderItem={(item) => { */}
                <Image style={{width: 200, height: 200}} source={{uri: 'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689'}} />
              {/* }
            } /> */}
            </FlatList>
        </View>
      );
    }
  }
  
  // Later on in your styles..
  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  export default Featured;