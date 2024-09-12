import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
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

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());
  const categories = useSelector(state=> state.categories)
  console.log(categories)
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
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories} renderItem={({item})=>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
