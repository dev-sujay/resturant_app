import { View, StyleSheet, Text, Pressable, ScrollView, Image, Platform } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { Avatar, Card } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { repeatItems, toast } from '../utils/utils';
import { Searchbar } from 'react-native-paper';
import dummy from "../utils/dummy.json"
import OfferCard from '../components/OfferCard';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const [categories, setCategories] = React.useState(dummy.categories)
  const [offers, setOffers] = React.useState(dummy.offers)

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <View>
          <Text style={styles.deliverTo}>
            Deliver to
          </Text>
          <View style={styles.addressContainer}>
            <Text>
              Mp/A 29, Mondol Para...
            </Text>
            <Pressable onPress={() => toast("success", "feature coming soon!")}>
              <AntDesign name="down" size={16} color="black" />
            </Pressable>
          </View>
        </View>
        <View>
          <Avatar.Image size={50} source={{
            uri: "https://www.w3schools.com/howto/img_avatar.png"
          }} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchbarContainer}>
          <Searchbar
            placeholder="Search for dishes..."
            onChangeText={() => { }}
          />
        </View>
        <View style={styles.scrollContainer}>
          <Text style={styles.sectionHeader}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category) => (
                <Pressable style={styles.categoryBox} key={category.name} onPress={() => toast("success", "going to category filtered screen")}>
                  <Image source={{ uri: category.image }} style={styles.categoryImage} />
                  <Text style={styles.categoryText}>
                    {
                      category.name
                    }</Text>
                </Pressable>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              offers.map((offer, index) => (
                <Pressable key={offer.title} onPress={() => toast("success", "going to offers screen")}>
                  <OfferCard title={offer.title} description={offer.description} percentage={offer.percentage} discountRule={offer.discountRule} gradient={dummy.offerCardGradients[index]} />
                </Pressable>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.mostPopularContainer}>
          <Text style={styles.sectionHeader}>Most Popular</Text>
          {
            dummy.mostPopularFoods.map((food) => (
              <Pressable key={food.name}>
              <FoodCard name={food.name} image={food.image} price={food.price} rating={food.rating} discountedPrice={food.discountedPrice} foodDesc={food.foodDesc} />
              </Pressable>
            ))
          }
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 0 : 30,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  deliverTo: {
    fontSize: 20,
    fontWeight: "500"
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchbarContainer: {
    marginTop: 10,
    paddingHorizontal: 20
  },
  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  categoryBox: {
    width: 90,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  categoryText: {
    textAlign: "center",
    marginTop: 5
  },
  offerCard: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  mostPopularContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  }
})

export default Home