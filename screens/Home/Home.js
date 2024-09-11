import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
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

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());
  console.log(user);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
