import React, {useEffect} from 'react';
import {StyleSheet, Text, Dimensions, Pressable, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import BackArrow from "../icons/BackArrow";
import {useNavigation} from "@react-navigation/native";
import {changePage} from "../store/action-creator";

const WIDTH = Dimensions.get("window").width;

const Header = () => {
  const { pageName, previousPage } = useSelector( (state: RootState) => state.navigation);
  const { goBack }  = useNavigation();
  const dispatch = useDispatch();
  const handleBack = ():void => {
    if(previousPage === "Все изображения") dispatch(changePage("Все изображения"))
    if(previousPage === "Избранное") dispatch(changePage("Избранное"))
    goBack();
  }
  return (
      <View style={!(pageName === "Избранное" || pageName === "Все изображения") && {backgroundColor:  "black"}}>
        <LinearGradient
          colors={["#790598","#BC1399"]}
          style={styles.container}
        >
          {!(pageName === "Избранное" || pageName === "Все изображения") && <Pressable
            style={styles.back}
            onPress={handleBack}
          >
            <BackArrow/>
          </Pressable>}
          <Text style={styles.description}>{pageName}</Text>
        </LinearGradient>
      </View>
  );
};
//180deg, #790598 0%, #BC1399 100%
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "relative",
  },
  description: {
    color: "white",
    fontSize: 22,
  },
  back: {
    position: "absolute",
    left: 15,
    top: 22
  }
})

export default Header;