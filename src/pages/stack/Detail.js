import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Detail() {
    const nav = useNavigation();

    return (
        <View>
            <Text>Detail</Text>
            <Button
                title="Back"
                onPress={() => {
                    nav.goBack();
                }}
            />
        </View>
    );
}

export default Detail;