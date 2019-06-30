import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

class SearchScreen extends React.Component {
    render() {
      return (
        <ScrollView>
        <View style={{ flex: 1, flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#f7f7f7' }}>

            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: '#f7f7f7', width: '100%', height:62}}>
              <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#553850", marginLeft:26}}>Ignored Offers</Text>
            </View>

            <View style={{ flex:1, justifyContent: 'flex-start', alignItems:'center', height:'100%'}}>
                <Image source={require('./assests/images/facial.jpg')} style={{width: 420,height: 200,opacity:0.5, backgroundColor: "#38205d", marginTop:0.2}}/>

            <View style={{width: '100%',height: 646,borderRadius: 5,backgroundColor: "#ffffff"}}>

              <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:13, marginTop:18}}>Body Massage</Text>
                <Image source={require('./assests/images/drawable-hdpi/group_2.png')} style={{width: 18,height: 18, marginLeft:13, marginTop:18, marginLeft:'54%'}}/>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:13, marginTop:18}}>4.5</Text>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "normal",fontStyle: "normal",letterSpacing: 0,color: "#6f747b", marginLeft:13, marginTop:10}}>Lara Spa</Text>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:13, marginTop:10, marginLeft:'63%'}}>1.5 km</Text>
              </View>

              <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width: 330, marginTop:15, alignSelf:'center'}}/>

              <View>
                    <Text style={{fontFamily: "Muli", fontSize: 13, fontWeight: "600", fontStyle: "normal", letterSpacing: 0, color: "#553850", marginLeft: 15, marginTop:16}}>Description</Text>

                    <View style={{flexDirection:'row', marginLeft: 15, marginTop:12, alignItems:'center'}}>
                        <Image source={require('./assests/images/drawable-hdpi/oval.png')} />
                        <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Lore ipsum is simple</Text>
                    </View>

                    <View style={{flexDirection:'row', marginLeft: 15, marginTop:8,alignItems:'center'}}>
                        <Image source={require('./assests/images/drawable-hdpi/oval.png')} />
                        <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Dummy Text of the printing</Text>
                    </View>

                    <View style={{flexDirection:'row', marginLeft: 15, marginTop:8,alignItems:'center'}}>
                        <Image source={require('./assests/images/drawable-hdpi/oval.png')} />
                        <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Typesetting industry</Text>
                    </View>

                    <View style={{flexDirection:'row', marginLeft: 15, marginTop:8,alignItems:'center'}}>
                        <Image source={require('./assests/images/drawable-hdpi/oval.png')} />
                        <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Lore ipsum is simple</Text>
                    </View>
              </View>

                    <View style={{flexDirection:'row', alignItems:'center', width: 320,height: 53,borderRadius: 4,backgroundColor: "#f6f6f6", alignSelf:'center', marginTop:16}}>
                        <View>
                          <Image source={require('./assests/images/drawable-hdpi/group_43.png')} />
                        </View>
                        <View>
                          <Text>20 Jan 2019</Text>
                        </View>
                        
                        <View>
                          <Image source={require('./assests/images/drawable-hdpi/group_44.png')} />
                        </View>
                        <View>
                          <Text>11AM - 12PM</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', justifyContent: "center"}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:24,alignItems:'center'}}>
                            <View>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Quantity</Text>
                            </View>
                            <View style={{flexDirection:'row', marginRight:17, justifyContent:'center'}}>
                              <View style={{width: 18,height: 16.2,borderRadius: 2,borderStyle: "solid", borderWidth: 1, borderColor: "#553850", alignItems:'center', justifyContent:'center'}}>
                                <View style={{width: 10.8,height: 0.4,borderStyle: "solid",borderWidth: 1,borderColor: "#553850"}} />
                              </View>
                              <Text style={{fontFamily: "Muli", fontSize: 16, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:12, marginRight:12}}>1</Text>
                              <View style={{width: 18,height: 16.2,borderRadius: 2,borderStyle: "solid", borderWidth: 1, borderColor: "#553850"}}/>
                            </View>
                          </View>

                          <View style={{flexDirection:'row', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer ID:</Text>
                          </View>

                          <View style={{flexDirection:'row', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>List Price</Text>
                          </View>

                          <View style={{flexDirection:'row', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Price</Text>
                          </View>

                          <View style={{flexDirection:'row', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Discount Percentage</Text>
                          </View>

                          <View style={{flexDirection:'row', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Discount Amount</Text>
                          </View>
                    </View>
              </View>

            </View>

        </View>
        </ScrollView>
      );
    }
  }

  export default SearchScreen;