import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import CartButton from './AddToCartBtn';

const FoodCard = ({
    name,
    foodDesc,
    image,
    rating,
    price,
    discountedPrice
}) => {
    const [cartCount, setCartCount] = React.useState(0)
    return (
        <View style={styles.foodCardContainer}>
            <View style={{ flex: 2, padding: 5 }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.foodDesc}>{foodDesc}</Text>
                <StarRatingDisplay
                    starSize={20}
                    maxStars={5}
                    rating={rating}
                />
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹ {price}</Text>
                    <Text style={styles.discountedPrice}>₹{discountedPrice}</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.foodImage} />
                <CartButton cartCount={cartCount} setCartCount={setCartCount} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodCardContainer: {
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 10,
        marginBottom: 20,
        padding: 10,
        flexDirection: "row",
    },
    foodImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 10
    },
    name: {
        fontWeight: "bold",
        fontSize: 16
    },
    foodDesc: {
        color: "grey",
        fontSize: 12
    },
    price: {
        fontSize: 12,
        textDecorationLine: "line-through",
        color: "grey",
        marginRight: 10
    },
    discountedPrice: {
        fontSize: 14,
        fontWeight: "bold"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FoodCard