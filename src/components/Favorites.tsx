import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import ImageCard from "./ImageCard";

const Favorites: React.FC = () => {
  const { imageData } = useSelector((state: RootState) => state.loadImageReducer);
  const liked = imageData.filter( item => item.favorite);

  return (
    <ScrollView style={{ backgroundColor: "#F4F4F4",}}>
      <View style={styles.wrapper}>
        {liked.map( item => (
          <ImageCard image={item}/>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingTop: 15,
  }
})

export default Favorites;