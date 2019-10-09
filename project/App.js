import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { people, isFetching } = props.people;
  return (
    <View style={container}>
      <Text style={text}>React Native Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getPeople()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text style={{marginTop: 10}}>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i} style={{padding: 6, fontSize: 14, fontFamily: 'Roboto',fontWeight: 'bold'}}>
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
      }
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

})

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)