import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, View, ActivityIndicator } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useBiometrics } from "@/app/components/day5/BiometricsProvider";

export default function BiometricProtectedLayout() {
    const { isUnlocked, authenticate } = useBiometrics();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!isUnlocked){
            authenticate()
        }
        
    }, [!isUnlocked]);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                <ActivityIndicator size="large" color="gray" />
            </View>
        );
    }

    if (!isUnlocked) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                <Text style={{ fontFamily: "Inter", fontSize: 20, marginBottom: 20 }}>Use PIN to unlock </Text>
                <FontAwesome5 onPress={authenticate} name="key" size={75} color="gray" />
            </View>
        );
    }

    return <Slot />;
}
