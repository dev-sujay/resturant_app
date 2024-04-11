import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const FoodCard = ({
    name,
    foodDesc,
    image,
    rating,
    price,
    discountedPrice
}) => {
    return (
        <View style={styles.foodCardContainer}>
            <Image source={{ uri: image }} style={styles.foodImage} />
            <View style={styles.detailesContainer}>
                <View style={styles.horizontalContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {name}
                    </Text>
                    <Text style={{ fontSize: 16, color: "grey" }}>₹
                        <Text style={{ textDecorationStyle: "solid", textDecorationLine: "line-through", marginRight: 10 }}> {price}</Text>
                        {discountedPrice}
                    </Text>
                </View>
                <View style={styles.horizontalContainer}>
                    <StarRatingDisplay
                        rating={rating}
                        starSize={20}
                        starStyle={{
                            marginHorizontal: 0
                        }}
                    />
                </View>
                <Text style={styles.foodDesc}>
                    {foodDesc}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodCardContainer: {
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 10,
        marginBottom: 20,
        padding: 20
    },
    foodImage: {
        width: "100%",
        height: 200,
        borderRadius: 20
    },
    detailesContainer: {
        marginTop: 10,
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6
    },
    foodDesc : {
        color: "grey",
        fontSize: 14
    }
})

export default FoodCard