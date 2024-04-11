import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default ({
    title,
    description,
    percentage,
    discountRule,
    gradient
}) => {

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[gradient.startColor, gradient.endColor]}
            style={styles.container}>
            <Text style={styles.offerTitle}>
                {title}
            </Text>
            <Text style={styles.offerDesc}>
                {description}
            </Text>
                <View
                    style={styles.offerPercent}>
                    <Text style={styles.offerPercentText}>
                        {percentage} %
                    </Text>
                    <Text style={styles.percentageDesc}>
                        {discountRule}
                    </Text>
            </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginRight: 10,
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        elevation: 4,
    },
    offerTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    offerDesc: {
        color: "#FFFFFF",
        fontSize: 13,
        marginBottom: 10,
    },
    offerPercent: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    offerPercentText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    percentageDesc: {
        color: "#FFFFFF",
        fontSize: 12,
    }
});