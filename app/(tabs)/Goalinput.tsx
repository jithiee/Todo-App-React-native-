import { View, StyleSheet, TextInput, Button, Modal , Image } from "react-native"

function Goalinput(props) {
    return (


        <Modal visible={props.isModelVisible} animationType="slide">

            <View style={style.inputcontainer} >
                    <Image style={style.image}  source={require('../../assets/images/arr.png')} />
                <TextInput
                    onChangeText={props.goalInpurHandler}
                    style={style.textinput}
                    placeholder="Enter your Todo"
                    value={props.goalText}
                />


                <View style={style.buttoncontainer}>
                  <View> 
                        <Button
                            color={'#f31282'}
                            title='cancel'
                            onPress={props.closeGoaalHandler}
                            /></View>
                  <View>
                        <Button
                                onPress={props.addGoalHandler}
                                title='Add item' />
                  </View>
                    
                   
                </View>

            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    inputcontainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 24,
        borderBottomColor: '#cccccc',
        flex: 1,
        backgroundColor:'#1A0037',
    },
    textinput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '90%',
        padding: 12,
      
        borderRadius:6,
        backgroundColor:'#e4d0ff'
    

    },
    buttoncontainer:{
        flexDirection:'row',
        gap:30, 
        padding:20,
       
    },
    image :{
        width:200,
        height:200 ,
        margin: 20 ,
        marginStart:25,
    }
        

})



module.exports = Goalinput;




