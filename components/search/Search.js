import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
  return (
    <View style={style.searchInputContainer}>
       <FontAwesomeIcon icon={faSearch}/>
       <TextInput style={style.searchInput} />
    </View>
  )
}

export default Search