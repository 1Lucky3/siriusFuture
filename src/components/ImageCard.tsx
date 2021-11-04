import React from 'react';
import {StyleSheet, Image, Dimensions, Pressable, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {changePage, openModal} from "../store/action-creator";
import Liked from "../icons/Liked";
import {RootState} from "../store/reducers";

interface IImageCard {
  cardType?: string
  image: IDataImage
}
interface IDataImage {
  id: string,
  url: string,
  description: string,
  favorite?: boolean
}
const WIDTH = Dimensions.get("window").width

const ImageCard: React.FC<IImageCard> = ({cardType, image}) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const handleModal = ():void => {
    dispatch(changePage(image.description))
    dispatch(openModal({id: image.id, url: image.url, favorite: image.favorite as boolean}))
    navigate({name: "Modal"})
  }

  if(cardType === "middle") return <Pressable style={[styles.boxWrap]} onPress={handleModal}>
    {image.favorite && <View style={styles.liked}><Liked/></View>}
    <Image style={[styles.cardWrap,styles.middleCard]} source={{uri: image.url}}/>
  </Pressable>
  if(cardType === "big") return <Pressable style={[styles.boxWrap]}  onPress={handleModal}>
    {image.favorite && <View style={styles.liked}><Liked/></View>}
    <Image style={[styles.cardWrap,styles.bidCard]} source={{uri: image.url}}/>
  </Pressable>
  return (
    <Pressable style={[styles.boxWrap]}  onPress={handleModal}>
      {image.favorite && <View style={styles.liked}><Liked/></View>}
      <Image style={[styles.cardWrap,styles.smallCard]} source={{uri: image.url}}/>
    </Pressable>
  );

};

const styles = StyleSheet.create({

  boxWrap: {
    marginVertical: 2.5,
    marginHorizontal: 3.5,
    position: "relative"
  },
  cardWrap: {
    borderRadius: 10,
  },
  smallCard: {
    height: 81,
    width: WIDTH/4 - 15,
  },
  middleCard: {
    width: WIDTH/2 - 15 - 3.5 * 2,
    height: 167
  },
  bidCard: {
    width: WIDTH * 0.75 - 15 - 3.5 * 4,
    height: 167
  },
  liked: {
    position: "absolute",
    bottom: 6,
    left: 6,
    zIndex:5555
  }
})

export default ImageCard;