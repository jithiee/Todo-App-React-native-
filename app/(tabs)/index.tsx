import { View, Text , TextInput , Button  , StyleSheet} from 'react-native'
import React, { useState } from 'react'

const index = () => {

const [goalText , setGoalText] = useState('')
const [goals , setGoals] = useState([])

function goalInpurHandler(text){
  setGoalText(text)
}
  
function addGoalHandler(){
 setGoals((currentgoals) =>[...currentgoals , goalText])
 setGoalText('')
  
  
}

  return (
    <View  style={style.appcontainer}>

    <View  style={style.inputcontainer} >
      <TextInput
       onChangeText={goalInpurHandler}
       style={style.textinput} 
       placeholder="Enter your Todo"
       />
       <Button 
       onPress={addGoalHandler}
       title='Add item' />
    </View>
    <View style={style.goalscontainer} > 
       {goals.map((goal , i)=>(
        <Text key={i}>{goal}</Text>
       ))}
    </View>
    </View>
  )
}

export default index

const style = StyleSheet.create({
  appcontainer:{
    padding:50,
    paddingHorizontal:16,
    flex:1 ,

 },
 inputcontainer:{
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'center',
  borderBottomWidth:1, 
  paddingBottom: 24, 
  borderBottomColor:'#cccccc',
  flex:1,


 },
 textinput:{
  borderWidth:1 ,
  borderColor:"#cccccc",
  width:'70%',
  padding:8 , 


 },

 goalscontainer:{
  flex:4 , 

 }
})