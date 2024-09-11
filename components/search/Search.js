import { View, Text, TextInput,Pressable } from 'react-native'
import React, {useRef, useState} from 'react'
import style from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { scaleFontSize } from '../../assets/styles/scalling'
import PropTypes from 'prop-types';
const Search = (props) => {
    const textRef = useRef(null)
    const [search,setSearch] = useState('')
    const handleFocus = ()=>{
        textRef.current.focus()
    }

    const handleSearch = (value)=>{
         setSearch(value) 
         props.onSearch(value)
    }
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus} >
       <FontAwesomeIcon
       color={'#25C0FF'}
       size={scaleFontSize(22)}
       icon={faSearch}/>
       <TextInput 
       placeholder={props.placeholder}
       ref = {textRef}
       style={style.searchInput}
       value = {search}
       onChangeText={(value)=> handleSearch(value)}
       />
    </Pressable>
  )
}

Search.defaultProps = {
    onSearch: ()=>{},
    placeholder: "Search"
}

Search.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string
}

export default Search