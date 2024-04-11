import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {children }
        </SafeAreaView>
    )
}

export default ScreenWrapper