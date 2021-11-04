import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import Delete from "../icons/Delete";
import {changePage, fetchSuccess, openModal, updateData} from "../store/action-creator";
import FillLike from "../icons/FillLike";
import Liked from "../icons/Liked";
import {useNavigation} from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width

const ImageModal: React.FC = () => {
  const { id, url, favorite } = useSelector((state:RootState) => state.modal);
  const { imageData } = useSelector((state: RootState) => state.loadImageReducer);
  const { previousPage } = useSelector( (state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleFavorites = (liked: boolean):void => {
    const addField = imageData.find(item => item.id === id);
    addField["favorite"] = liked;
    dispatch(openModal({id: id, url:url, favorite:liked}))
  }
  const handleDelete = () => {
    const newData = imageData.filter(item => item.id !== id);
    dispatch(updateData(newData));
    if (previousPage === "Избранное") dispatch(changePage("Избранное"));
    if (previousPage === "Все изображения") dispatch(changePage("Все изображения"));
    navigation.goBack();
  }
  return (
    <View style={styles.contain}>
      <Image style={styles.imageWrap} source={{uri: url}}/>
        <View style={styles.buttonContain}>
          {favorite ? <Pressable style={styles.button} onPress={() =>handleFavorites(false)}>
            <Liked/>
            <Text style={styles.buttonDesignation}>Убрать из избранного</Text>
          </Pressable>
          : <Pressable style={styles.button} onPress={() =>handleFavorites(true)}>
              <FillLike/>
              <Text style={styles.buttonDesignation}>Добавить в избранное</Text>
            </Pressable>}
          <View style={styles.middleLine}/>
          <Pressable style={styles.button} onPress={handleDelete}>
            <Delete/>
            <Text style={styles.buttonDesignation}>Удалить изображение</Text>
          </Pressable>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  contain: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    height: "100%",
  },
  imageWrap: {
    width: WIDTH,
    height: "50%",
    resizeMode: "cover",
  },
  buttonContain: {
    width: WIDTH - 30,
    height: 85,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 14,
    marginHorizontal: 15,
    position: "absolute",
    bottom: 15
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonDesignation: {
    marginLeft: 11,
    color: "black",
    fontSize: 16
  },
  middleLine: {
    height: 1,
    marginVertical: 7,
    backgroundColor: "#C4C4C4",
    width: WIDTH - 30
  }
})

export default ImageModal;