import { View, Text, StyleSheet, Pressable } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

function Goalitem(props) {

    return (
        
        <Pressable onPress={props.deleteItem}
        android_ripple={{color:"red"}}
        >
            <View  >
                <Text style={style.goaItems}>{props.items}</Text>
            </View>
        </Pressable>
    )
}


const style = StyleSheet.create({
    goaItems: {
        gap: 5,
        margin: 8,
        color: 'white',
        backgroundColor: '#5e0acc',
        borderRadius: 8,
        padding: 5,

    }
})

module.exports = Goalitem;

