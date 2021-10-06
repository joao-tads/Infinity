import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

function Detail({ navigation }) {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Detail</Text>
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
}

export default Detail;