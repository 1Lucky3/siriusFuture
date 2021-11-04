import React from 'react';
import {View, StyleSheet} from "react-native";

interface ISize {
  // index: number
  // size?: string
  width: number
}

const SkeletonBox: React.FC<ISize> = ({width}) => {
  const cardWidth = {
    small: {
      width: width/4 - 15
    },
    middle: {
      width: width/2 - 15 - 3.5 * 2
    },
    big: {
      width: width * 0.75 - 15 - 3.5 * 4
    }
  }
  function smallSkeletonLine() {
    return (
      <View style={styles.contain}>
        <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
      </View>
    )
  }
  function middleSkeletonLine() {
    return (
      <View style={styles.contain}>
        <View style={styles.middleGrid}>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        </View>
        <View style={styles.middleGrid}>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        </View>
        <View style={[styles.box,styles.skeletonMiddle,cardWidth.middle]}/>
      </View>
    )
  }
  function bigSkeletonLine() {
    return (
      <View style={styles.contain}>
        <View style={[styles.box,styles.skeletonBig,cardWidth.big]}/>
        <View style={styles.middleGrid}>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
          <View style={[styles.box,styles.skeletonSmall, cardWidth.small]}/>
        </View>
      </View>
    )
  }

  return (
    <>
      {smallSkeletonLine()}
      {middleSkeletonLine()}
      {smallSkeletonLine()}
      {smallSkeletonLine()}
      {bigSkeletonLine()}
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    display: "flex",
    flexDirection: "row"
  },
  box: {
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginVertical: 2.5,
    marginHorizontal: 3.5
  },
  skeletonSmall: {
    width: 81,
    height: 81,
  },
  skeletonMiddle: {
    height: 167
  },
  skeletonBig: {
    width: 257,
    height: 167
  },
  middleGrid: {
    display: "flex",
    flexWrap: "wrap"
  },
})

export default SkeletonBox;