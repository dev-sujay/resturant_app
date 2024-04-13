import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

const CartButton = ({ 
    cartTextTimeOut, 
    cartValueTimeIn, 
    style,
    cartText, 
    textColor, 
    cartCount,
    setCartCount
 }) => {

    const offset = useSharedValue(1);
    const moveLeftVal = useSharedValue(1);
    const moveRightVal = useSharedValue(1);
    const moveInVal = useSharedValue(0);
    const pressBtnStyle = useAnimatedStyle(() => {
        return {
            opacity: offset.value,
            display: offset.value === 0 ? 'none' : "flex",
            transform: [{
                scale: offset.value
            }]
        };
    })
    const afterPressStyle = useAnimatedStyle(() => {
        return {
            display: offset.value >= 0.1 ? 'none' : "flex",
            transform: [{ scale: offset.value ? withSpring(0) : withSpring(1) }]
        };
    }, [offset]);
    const movingInStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: moveInVal.value }]
        };
    }, [offset]);
    const movingLeftStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: moveLeftVal.value }]
        };
    }, [offset]);
    const movingRightStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: moveRightVal.value }]
        };
    }, [offset]);

    const onBtnPressed = () => {
        setCartCount(1)
        offset.value = withTiming(0, { duration: cartTextTimeOut ?? 400 }, () => {
            moveLeftVal.value = withTiming(-20, { duration: cartValueTimeIn ?? 400 })
            moveRightVal.value = withTiming(20, { duration: cartValueTimeIn ?? 400 })
            moveInVal.value = 1
        })
    }
    const handleCount = (value) => {
        setCartCount(currentCartCount => currentCartCount + value)
    }
    useEffect(() => {
        if (cartCount === 0) {
            offset.value = withTiming(1, { duration: cartTextTimeOut ?? 400 })
            moveLeftVal.value = withTiming(0, { duration: cartValueTimeIn ?? 400 })
            moveRightVal.value = withTiming(0, { duration: cartValueTimeIn ?? 400 })
            moveInVal.value = 0
        }
    }, [cartCount])

    return (
        <View style={[{ width: 100, height: 40, backgroundColor: "#581c87", justifyContent: "center", alignItems: "center", borderRadius : 15 }, style]}>
            <Animated.View style={[pressBtnStyle]}>
                <TouchableOpacity onPressIn={onBtnPressed}><Text style={{ color: textColor ?? "white", padding: 10 }}>{`Add to cart` ?? cartText}</Text></TouchableOpacity>
            </Animated.View>
            <Animated.View style={[afterPressStyle, { flexDirection: "row", justifyContent: "center", alignItems: "center" }]}>
                <Animated.View style={[movingLeftStyle]}>
                    <Feather color={textColor ?? "white"} onPress={() => handleCount(1)} name='plus' />
                </Animated.View>
                <Animated.View style={[movingInStyle]}>
                    <Text style={{ color: textColor ?? "white" }}>{cartCount}</Text>
                </Animated.View>
                <Animated.View style={[movingRightStyle]}>
                    <Feather color={textColor ?? "white"} onPress={() => handleCount(-1)} name='minus' />
                </Animated.View>
            </Animated.View>
        </View>
    )
}


export default CartButton;