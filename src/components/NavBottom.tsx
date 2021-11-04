import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import Star from "../icons/Star";
import Gallery from "../icons/Gallery";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {changePage, previousPage} from "../store/action-creator";
import {RootState} from "../store/reducers";

const NavBottom = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation();
  const { pageName } = useSelector((state:RootState) => state.navigation)
  const handlePage = (): void => {
    if(pageName === "Избранное") {
      dispatch(changePage("Все изображения"))
      dispatch(previousPage("Все изображения"))
      navigate({ name: "Home"})
      return
    }
    dispatch(changePage("Избранное"))
    dispatch(previousPage("Избранное"))
    navigate({ name: "Favorites"})
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePage} style={styles.iconWrapper}>
        <Gallery active={pageName === "Все изображения" && true}/>
        <Text style={pageName === "Все изображения" && styles.activeColor}>Галерея</Text>
      </Pressable>
      <Pressable onPress={handlePage} style={styles.iconWrapper}>
        <Star active={pageName === "Избранное" && true}/>
        <Text style={pageName === "Избранное" && styles.activeColor}>Избранное</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    paddingVertical: 10
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center"
  },
  activeColor: {
    color: "#A10D99",
  }
})

export default NavBottom;