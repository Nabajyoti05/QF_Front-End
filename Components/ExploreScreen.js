import React from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView,Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';


export default class ExploreScreen extends React.Component{
  state={
    renderItems: [
      {uri:'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'Aquaman'},
      {uri:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Aquaman'},
      {uri:'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg', name: 'Aquaman'},
      {uri:'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689', name: 'Aquaman'}
    ]
  }
  render(){
        let images1 = this.state.renderItems.map((item, i) => {
        console.log("Item", item.name);
          return (
          
            <View style={{padding:4}} key={i}>
              <TouchableOpacity>
                <Image style={{width: 130, height: 150, borderRadius:5}} source={{uri: item.uri}} />
              </TouchableOpacity>
            </View>
          
          )
        })

        let images2 = this.state.renderItems.map((item, i) => {
          console.log("Item", item.name);
            return (
            
              <View style={{padding:4}} key={i}>
                <TouchableOpacity>
                  <Image style={{width: 130, height: 150, borderRadius:5}} source={{uri: item.uri}} />
                </TouchableOpacity>
              </View>
            
            )
          })
    return(
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={{marginRight:-315, marginTop:6}}><Icons name="md-search" style={{position:'absolute'}} size={40}/></View>
          <View style={{marginRight:-10, marginTop:12}}><Text style={{position:'absolute', fontSize:18}}>Search</Text></View>
          <TextInput style={styles.textInput} />
        </View>

        <View style={{padding:10}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Recent Searches</Text>
        </View>


          <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                  {images1}
            </ScrollView>
          </View>

        <View style={{padding:20,flexDirection:'row', justifyContent:'flex-start'}}>
            <Text style={{padding:5, borderColor:'grey',borderWidth:1, borderRadius:5, width:100, marginRight:10, textAlign:'center'}}>Horror</Text>
            <Text style={{padding:5, backgroundColor:'grey', borderRadius:15, width:140, marginRight:10}}></Text>
            <Text style={{padding:5, backgroundColor:'grey', borderRadius:15, width:110, marginRight:10}}></Text>
        </View>
        <View style={{padding:20,flexDirection:'row', justifyContent:'flex-start', marginTop:-25}}>
            <Text style={{padding:5, backgroundColor:'grey', borderRadius:15, width:140, marginRight:10}}></Text>
            <Text style={{padding:5, backgroundColor:'grey', borderRadius:15, width:100, marginRight:10}}></Text>
            <Text style={{padding:5, backgroundColor:'grey', borderRadius:15, width:120, marginRight:10}}></Text>
        </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>

          <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-start', backgroundColor:''}}>
            <ScrollView horizontal>
                {images2}
            </ScrollView>
          </View>
          
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  innerContainer:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'flex-start',
    marginTop:20
  },
  textInput:{
    width:'90%',
    height:50,
    borderRadius:20,
    borderWidth:1,
    // flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginRight:20
  }
})