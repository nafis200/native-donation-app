import { View, Text, TextInput,Pressable } from 'react-native'
import React, {useRef} from 'react'
import style from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
    const textRef = useRef(null)
    const handleFocus = ()=>{
        textRef.current.focus()
    }
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus} >
       <FontAwesomeIcon icon={faSearch}/>
       <TextInput 
       ref = {textRef}
       style={style.searchInput} />
    </Pressable>
  )
}

export default Search