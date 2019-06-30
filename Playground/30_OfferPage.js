import React from 'react';
import { Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class OfferDetailsScreen extends React.Component {
  state={
    min:1,
    max:10,
    count:1,
    add:false,
    subs:false
  }

onPressAddHandler = () => {
  this.setState({
    ...this.state,
    count: this.state.count + 1
  })
}

onPressSubsHandler = () => {
  this.setState({
    ...this.state,
    count: this.state.count - 1
  })
}

    render() {
      return (
        <ScrollView>
        <View style={{ flex: 1, flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#f7f7f7' }}>

            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: '#f7f7f7', width: '100%', height:62}}>
              <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#553850", marginLeft:26}}>Ignored Offers</Text>
            </View>

            <View style={{height:840}}>
                <Image source={require('./assests/images/facial.jpg')} style={{width: 420,height: 200, opacity:0.5, backgroundColor: "#38205d", marginTop:0.2}}/>
                
                <View style={{flexDirection:'row', justifyContent:'space-between',position:'absolute'}}>
                  <View>
                      <Text style={{fontFamily: "Muli",fontSize: 14,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:18, marginTop:12}}>Abbii Spa & Beauty Spa</Text>
                  </View>
                  <View style={{flexDirection:'row', marginTop:12, marginRight:18, marginLeft:180}}>
                      <Image source={require('./assests/images/drawable-hdpi/group_2.png')} style={{width: 18,height: 18}}/>
                      <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:8}}>4.5</Text>
                  </View>

              </View>
                  <View style={{flexDirection:'row',position:'absolute'}}>
                      <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:18, marginTop:36, marginRight:15}}>1.5 km</Text>                    
                  </View>

            <View style={{width:380,height: 680,borderRadius: 5,backgroundColor: "#ffffff", position:'absolute', marginTop:130, alignSelf:'center'}}>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View>
                      <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:13, marginTop:18}}>Body Massage</Text>
                  </View>
                  <View style={{flexDirection:'row', marginTop:18, marginRight:15}}>
                      <Image source={require('./assests/images/drawable-hdpi/group_2.png')} style={{width: 18,height: 18}}/>
                      <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:8}}>4.5</Text>
                  </View>
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "normal",fontStyle: "normal",letterSpacing: 0,color: "#6f747b", marginLeft:13, marginTop:10}}>Lara Spa</Text>
                <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:13, marginTop:10, marginRight:15}}>1.5 km</Text>
              </View>

              <View style={{ borderBottomColor: '#ded3eb', borderBottomWidth: 1, width: 330, height:2, marginTop:15, alignSelf:'center'}}/>

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

                    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', width: 330,height: 53,borderRadius: 4,backgroundColor: "#f6f6f6", alignSelf:'center', marginTop:16}}>
                        <View style={{flexDirection:'row', marginLeft:14}}>
                          <Image source={require('./assests/images/drawable-hdpi/group_43.png')} style={{width:14, height:14}}/>
                          <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "600",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:9}}> 20 Jan 2019</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',marginRight:14}}>
                          <Image source={require('./assests/images/drawable-hdpi/group_44.png')} style={{width:14, height:14}}/>
                          <Text style={{fontFamily: "Muli",fontSize: 12,fontWeight: "600",fontStyle: "normal",letterSpacing: 0,color: "#563951", marginLeft:9}}>11AM - 12PM</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', justifyContent: "center"}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:24,alignItems:'center'}}>
                              <View>
                                <Text style={{height:18,fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Quantity</Text>
                              </View>

                              <View style={{flexDirection:'row', marginRight:17, justifyContent:'center'}}>

                                <TouchableOpacity onPress={this.state.count === this.state.min ? null : this.onPressSubsHandler}>
                                  <Image source={require('./assests/images/drawable-hdpi/group6.png')} style={{opacity:this.state.count === this.state.min ? 0.2 : 1}} />                              
                                </TouchableOpacity>
                                
                                <Text style={{height:18, fontFamily: "Muli", fontSize: 16, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:12, marginRight:12}}>{this.state.count}</Text>
                                
                                <TouchableOpacity onPress={this.state.count === this.state.max ? null : this.onPressAddHandler}>
                                  <Image source={require('./assests/images/drawable-hdpi/group6Copy.png')} style={{opacity: this.state.count === this.state.max ? 0.2 : 1}} />                              
                                </TouchableOpacity>
                                
                              </View>
                          </View>

                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer ID:</Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:8,marginRight:12}}>1024</Text>
                              </View>
                          </View>

                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>List Price</Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:8,marginRight:12}}>Rs.200</Text>
                              </View>
                          </View>

                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Price</Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:8,marginRight:12}}>Rs.170</Text>
                              </View>
                          </View>

                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Discount Percentage</Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:8,marginRight:12}}>10%</Text>
                              </View>
                          </View>

                          <View style={{flexDirection:'row',justifyContent:'space-between', marginLeft: 15, marginTop:11,alignItems:'center'}}>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: "#646970", marginLeft:8}}>Offer Discount Amount</Text>
                              </View>
                              <View>
                                <Text style={{fontFamily: "Muli", fontSize: 12, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#563951", marginLeft:8,marginRight:12}}>Rs.60</Text>
                              </View>
                          </View>
                    </View>
                    
                    <View style={{width: 330, height: 2, borderStyle: "solid", borderWidth: 1, borderColor: "#ded3eb", marginTop:21, alignSelf: 'center'}} />

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10,marginLeft:15}}>
                        <View>
                          <Text style={{fontFamily: "Muli",fontSize: 16,fontWeight: "600",fontStyle: "normal", letterSpacing: 0, color: "#4d1d53"}}> Total Price</Text>
                        </View>
                        <View>
                          <Text style={{fontFamily: "Muli",fontSize: 16,fontWeight: "600",fontStyle: "normal", letterSpacing: 0, color: "#4d1d53", marginRight:12}}>Rs.170</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column', justifyContent:'flex-start', marginLeft:15}}>
                      <Text style={{fontFamily: "Muli",fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0,color: "#646970", marginTop:22}}>Cancellation Allowed</Text>
                      <Text style={{fontFamily: "Muli",fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0,color: "#646970", marginTop:5}}>Cancellation Fee</Text>
                      <Text style={{fontFamily: "Muli",fontSize: 12, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0,color: "#646970", marginTop:5}}>Cancellation Allowed Until Date</Text>
                    </View>

                    {/* #9A7DC3','#7D63A1','#4d3664' */}
                    <LinearGradient colors={[ '#a789d2','#362550' ]} style={{flexDirection:'row', marginLeft:18, marginTop:22, marginRight:18, marginBottom:21, width:330, height: 46,borderRadius: 4, backgroundColor:'#705993', alignSelf:'center', justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily: "Muli",fontSize: 16, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#ffffff", textAlign:'left', marginLeft:22}}>Buy Now</Text>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{opacity: 0.58,fontFamily: "Muli",fontSize: 12, fontWeight: "600", fontStyle: "normal", letterSpacing: 0, color: "#ffffff", marginRight:12}}>Rs.200</Text>
                        <Text style={{fontFamily: "Muli",fontSize: 16, fontWeight: "bold", fontStyle: "normal", letterSpacing: 0, color: "#ffffff", textAlign:'right',marginRight:10}}>Rs.170</Text>
                      </View>
                    </LinearGradient>
              </View>

            </View>

        </View>
        </ScrollView>
      );
    }
  }

  export default OfferDetailsScreen;