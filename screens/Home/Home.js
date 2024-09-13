import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React,{useEffect, useState} from "react";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Tab from "../../components/tab/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Badge from "../../components/Badge/Badge";
import Search from "../../components/search/Search";
import Button from "../../components/Header/button/Button";
import SIngleDonationItem from "../../components/singledonetionItem/SIngleDonationItem";
import { horizontalScale } from "../../assets/styles/scalling";
import { useDispatch, useSelector } from "react-redux";
import { resetToInitialState, updateFirstName } from "../../redux/reducer/User";
import { updateSelectedCategoryId } from "../../redux/reducer/Categories";
import { resetDonation, updateSelectedDonationId } from "../../redux/reducer/Donation";
import { Routes } from "../../navigation/Routes";

const Home = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());
  dispatch(resetDonation())
  const categories = useSelector(state=> state.categories)
  const donation = useSelector(state=> state.donation)
  
  const [categoryPage,setCategoryPage] = useState(1)

 const [categoryList,setCategoryList] = useState([])

 const [isLoadingCategory,setIsLoadingCategory] = useState(false)

 const [donationItems,setDonationItems] = useState([])

 const categoryPageSize = 2;


 useEffect(()=>{
   
  const items = donation.items
  const filteredItems = items.filter((value) => value.categoriesIds.includes(categories.selectedCategoryId));
  setDonationItems(filteredItems)

 },[categories.selectedCategoryId])



 useEffect(()=>{
   setIsLoadingCategory(true)
   setCategoryList(pagination(categories.categories,categoryPage,categoryPageSize))
   setCategoryPage(prev => prev + 1)
   setIsLoadingCategory(false)
 },[])

 const pagination = (items,pageNumber,pageSize)=>{
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    if(startIndex >= items.length){
        return []
    }
    return items.slice(startIndex,endIndex)
 }


  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={[{ color: "black" }, style.headerIntroText]}>
              Hellow,{" "}
            </Text>
            <View style={style.username}>
              <Header title={user.firstName + " " + user.lastName[0]}></Header>
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            resizeMode={"contain"}
            style={style.profileimage}
          ></Image>
        </View>
        <View style={style.Searchbox}>
             <Search/>
        </View>
        <Pressable style={style.hightlightedContainer}>
           <Image style={style.highlighted} source={require('../../assets/image/127 - highlighted-image.png')} />
        </Pressable>
        <View style={style.categories}>
            <FlatList 
            onEndReachedThreshold={0.5}
            onEndReached={()=>{
              if(isLoadingCategory){
                return
              }
              setIsLoadingCategory(true)
              let newData = pagination(categories.categories,categoryPage,categoryPageSize)
              if(newData.length > 0){
                 setCategoryList(prevState => [...prevState,...newData])
                 setCategoryPage(prevState => prevState + 1)
              }
              setIsLoadingCategory(false)
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList} renderItem={({item})=>
               <View style={style.categoryItem}
                key={item.categoryId}
               >
                <Tab 
                tabId={item.categoryId}
                onPress={(value)=>dispatch(updateSelectedCategoryId(value))}
                title={item.name} isInactive={item.categoryId !== categories.selectedCategoryId}/>
               </View>
            }>

            </FlatList>
        </View>
        {
          donationItems.length > 0 &&( <View style={style.donationcontainer}>
          {
            donationItems.map(value=> (
              <View  key={value.donationItemId} style={style.singleDonationItem}>
              <SIngleDonationItem 
              onPress={selectedDonationId => {
                  dispatch(updateSelectedDonationId(selectedDonationId))
                  navigation.navigate(Routes.SingleDonationItem)
              }}
              donationItemId={value.donationItemId}
              uri = {value.image}
              donationTitle={value.name}
              badgeTitle={categories.categories.filter(val=>val.categoryId === categories.selectedCategoryId)[0].name}
              price={value.price} />
              </View>
            ))
          }

        </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
