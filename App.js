
import React,{useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,

  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const currencyperRupee={
  dollar:0.014,
  euro:0.012,
  pound:0.011,
  rubel:0.93,
  ausdollar:0.2,
  candollar:0.019,
  yen:1.54,
  dinar:0.0043,
  bitcoin:0.000004
}



const App=()=>{
  const [initialV,setinitialval]=useState("0");
  const [resultV,setresultval]=useState(0);

  const buttonPress=(currency)=>{
    if(!initialV || initialV==NaN){
      return(Snackbar.show({
        text: 'Please enter a value',
        backgroundColor:"#343A40",
        textColor:"#E1E8EB",
        
      }))

    }
  
      let result=parseFloat(initialV)*currencyperRupee[currency];
      if(!isNaN(result)){
      
        setresultval(result.toFixed(2))
      }
      else{
        setresultval(0)
      }
      
  
  }


  return(
    <>
    <StatusBar backgroundColor="#0A1D37"></StatusBar>
    <ScrollView backgroundColor="#0A1D37"
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic"

    >
     <SafeAreaView  style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.heading}>Currency Converter</Text>
        </View>
        <View style={styles.resultContainer}>
              <Text style={styles.resultV}>{resultV}</Text>
           
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
           placeholder="Enter Value" 
           keyboardType="numeric"
           placeholderTextColor="#FFBD9B"
           value={initialV}
           onChangeText={(initialV) =>setinitialval(initialV)} 
           >
          
          
          </TextInput>
        
        </View>
        <View style={styles.optMenu}>
        <View style={styles.btnContainer}>
           {Object.keys(currencyperRupee).map((currency)=>(
             
             <TouchableOpacity key={currency} style={styles.bgbtn} onPress={()=>buttonPress(currency)}><Text style={styles.btn}>{currency}</Text></TouchableOpacity>
            
           ))}
           </View>
        
        </View>

     
     </SafeAreaView>
    
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0A1D37"
  },
  headerContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
  },
  heading:{
    fontSize:30,
    color:"#FFBD9B",
    
  },
  resultContainer:{
    height:70,
    marginTop:40,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    fontSize:20,
    color:"#FFBD9B",
    
  },
  resultV:{
    fontSize:30,
    color:"#FFBD9B"
  },
  inputContainer:{
    marginTop:10,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    fontSize:20,
    color:"#FFBD9B"},
  input:{
    fontSize:30,
    color:"#FFBD9B",
    justifyContent:"center",
    alignItems:"center",
    width:160
  },
  optMenu:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    backgroundColor:"#FFBD9B",
    paddingBottom:"15%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20


  },
  bgbtn:{
     justifyContent:"center",
     alignItems:"center",
     width:"33.3%",
     height:100,
     backgroundColor:"#FFD8CC",
     borderRadius:5,
     margin:10,
     marginLeft:10,


  },
  btnContainer:{
    marginTop:80,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-evenly"
  },
  btn:{
    color:"#0A1D37",
    margin:10,
    textTransform:"uppercase",
    fontSize:15,


  }

})

export default App;