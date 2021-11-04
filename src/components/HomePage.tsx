import React, {useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import SkeletonBox from "./SkeletonBox";
import { fetchImage} from "../store/action-creator"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import ImageCard from "./ImageCard";

const WIDTH = Dimensions.get("window").width

interface IDataImage {
  id: string,
  url: string,
  description: string,
  favorites?: boolean
}

const HomePage = () => {

  const dispatch = useDispatch();
  const { imageData } = useSelector((state: RootState) => state.loadImageReducer);

  useEffect( () => {
    dispatch(fetchImage())
    setTimeout( () => {
      dispatch(fetchImage())
    },500);
  },[]);

  const returnCards = (data: any[]) => {
    let middleCardCycle = 4;
    let smallCardCycle = 9;
    let bigCardCycle = 17;
    let nextIsMiddle = true;
    return data.map((item, index) => {
      if(index < 4 || data.length < 9){
        return <ImageCard key={Math.random()} image={item}/>
      }
      if(index === middleCardCycle){
        middleCardCycle += 24;
        nextIsMiddle = false;
        if((data.length - (index + 1)) + 1 < 2) return <ImageCard key={Math.random()} image={data[index]}/>
        if((data.length - (index + 1)) + 1 < 3) return  <>
                                                          <ImageCard key={Math.random()} image={data[index]}/>
                                                          <ImageCard key={Math.random()} image={data[index + 1]}/>
                                                        </>
        if((data.length - (index + 1)) + 1 < 4) return <>
                                                         <ImageCard key={Math.random()} image={data[index]}/>
                                                         <ImageCard key={Math.random()} image={data[index + 1]}/>
                                                         <ImageCard key={Math.random()} image={data[index + 2]}/>
                                                       </>
        if((data.length - (index + 1)) + 1 < 5) return <>
                                                         <ImageCard key={Math.random()} image={data[index]}/>
                                                         <ImageCard key={Math.random()} image={data[index + 1]}/>
                                                         <ImageCard key={Math.random()} image={data[index + 2]}/>
                                                         <ImageCard key={Math.random()} image={data[index + 3]}/>
                                                       </>

        return (
          <View style={styles.contain}>
            <View style={styles.middleGrid}>
              <ImageCard key={Math.random()} image={data[index]}/>
              <ImageCard key={Math.random()} image={data[index + 1]}/>
            </View>
            <View style={styles.middleGrid}>
              <ImageCard key={Math.random()} image={data[index + 2]}/>
              <ImageCard key={Math.random()} image={data[index + 3]}/>
            </View>
            <ImageCard key={Math.random()} cardType="middle" image={data[index + 4]}/>
          </View>
        )
      }
      if(index === smallCardCycle ) {
        if(!nextIsMiddle) smallCardCycle += 11
        if(nextIsMiddle) smallCardCycle += 13
        const mapIndex = data.length - (index + 1);
        if(mapIndex + 1 < 9) {
          return data.slice(index, index + mapIndex + 1).map(card => (
            <ImageCard key={Math.random()} image={card}/>
          ))
        }
        if(mapIndex + 1 > 8) return data.slice(index, index + 8).map(card => (
                                <ImageCard key={Math.random()} image={card}/>
                              ))

      }
      if(index === bigCardCycle) {
        bigCardCycle += 24
        nextIsMiddle = true
        if((data.length - (index + 1)) + 1 < 2) return <ImageCard key={Math.random()} image={data[index]}/>
        if((data.length - (index + 1)) + 1 < 3) {
          return <>
            <ImageCard key={Math.random()} image={data[index]}/>
            <ImageCard key={Math.random()} image={data[index + 1]}/>
          </>
        }
        return (
          <View style={styles.contain}>
            <ImageCard key={Math.random()} cardType="big" image={data[index]}/>
            <View style={styles.middleGrid}>
              <ImageCard key={Math.random()} image={data[index + 1]}/>
              <ImageCard key={Math.random()} image={data[index + 2]}/>
            </View>
          </View>
        )
      }
    })
  }
  if(imageData.length < 50) {
    return <ScrollView>
      <View style={styles.wrapper}>
        <SkeletonBox width={WIDTH}/>
      </View>
    </ScrollView>
  }
  return (
   <>
     <ScrollView style={{ backgroundColor: "#F4F4F4",}}>
       <View style={styles.wrapper}>
         {returnCards(imageData)}
       </View>
     </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  contain: {
    display: "flex",
    flexDirection: "row",
  },
  middleGrid: {
    display: "flex",
    flexWrap: "wrap"
  },
})

export default HomePage;