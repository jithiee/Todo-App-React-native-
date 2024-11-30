import { View,Button, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import Goalitem from './Goalitem'
import Goalinput from './Goalinput'
import { StatusBar } from 'expo-status-bar'


const index = () => {

  const [goalText, setGoalText] = useState('')
  const [goals, setGoals] = useState([])
  const [isModelVisible, setIsModelVisible] = useState(false)

  function goalInpurHandler(text) {
    setGoalText(text)


  }

  function addGoalHandler() {
    if (goalText.trim().length === 0) return;
    setGoals((currentgoals) => [...currentgoals, goalText])
    closeGoaalHandler()
    setGoalText('')

  }

  function deleteItem(id) {
    const newitmes = goals.filter((e, i) => i != id)
    setGoals(newitmes)

  }

  function closeGoaalHandler() {
    setIsModelVisible(false)
  }
  function startAddGoalHandler() {
    setIsModelVisible(true)
  }


  return (
    <>
      <StatusBar style='light' />
        <View style={style.appcontainer}>
          <Button title='Add New Goals' color="green"
            onPress={startAddGoalHandler}
          />


          <Goalinput
            addGoalHandler={addGoalHandler}
            goalInpurHandler={goalInpurHandler}
            goalText={goalText}
            isModelVisible={isModelVisible}
            closeGoaalHandler={closeGoaalHandler}
          />



          <View style={style.goalscontainer} >
            <FlatList
              data={goals}
              renderItem={(itemData) => {

                return (
                  <Goalitem
                    items={itemData.item}
                    deleteItem={() => deleteItem(itemData.index)}
                  />


                )

              }}
            />
          </View>


        </View>
    </>
  )
}

export default index

const style = StyleSheet.create({
  appcontainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1A0037',

  },

  goalscontainer: {
    flex: 4,
    gap: 5,
    marginTop: 15,


  },


})


