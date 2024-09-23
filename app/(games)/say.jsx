import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const cardImages = [
    { id: 1, image: require('../../assets/cards/Bear.png'), name: 'Bear' },
    { id: 2, image: require('../../assets/cards/Cat.png'), name: 'Cat' },
    { id: 3, image: require('../../assets/cards/Chicken.png'), name: 'Chicken' },
    { id: 4, image: require('../../assets/cards/Cow.png'), name: 'Cow' },
    { id: 5, image: require('../../assets/cards/Crocodile.png'), name: 'Crocodile' },
    { id: 6, image: require('../../assets/cards/Dog.png'), name: 'Dog' },
    { id: 7, image: require('../../assets/cards/Elephant.png'), name: 'Elephant' },
    { id: 8, image: require('../../assets/cards/Fox.png'), name: 'Fox' },
    { id: 9, image: require('../../assets/cards/Giraffe.png'), name: 'Giraffe' },
    { id: 10, image: require('../../assets/cards/Horse.png'), name: 'Horse' },
    { id: 11, image: require('../../assets/cards/Koala.png'), name: 'Koala' },
    { id: 12, image: require('../../assets/cards/Lion.png'), name: 'Lion' },
    { id: 13, image: require('../../assets/cards/Monkey.png'), name: 'Monkey' },
    { id: 14, image: require('../../assets/cards/Mouse.png'), name: 'Mouse' },
    { id: 15, image: require('../../assets/cards/Penguin.png'), name: 'Penguin' },
    { id: 16, image: require('../../assets/cards/Pig.png'), name: 'Pig' },
    { id: 17, image: require('../../assets/cards/Sheep.png'), name: 'Sheep' },
    { id: 18, image: require('../../assets/cards/Tiger.png'), name: 'Tiger' },
    { id: 19, image: require('../../assets/cards/Zebra.png'), name: 'Zebra' },
];

const sounds = {
    Bear: require('../../assets/sounds/Bear.mp3'),
    Cat: require('../../assets/sounds/Cat.mp3'),
    Chicken: require('../../assets/sounds/Chicken.mp3'),
    Cow: require('../../assets/sounds/Cow.mp3'),
    Crocodile: require('../../assets/sounds/Crocodile.mp3'),
    Dog: require('../../assets/sounds/Dog.mp3'),
    Elephant: require('../../assets/sounds/Elephant.mp3'),
    Fox: require('../../assets/sounds/Fox.mp3'),
    Giraffe: require('../../assets/sounds/Giraffe.mp3'),
    Horse: require('../../assets/sounds/Horse.mp3'),
    Koala: require('../../assets/sounds/Koala.mp3'),
    Lion: require('../../assets/sounds/Lion.mp3'),
    Monkey: require('../../assets/sounds/Monkey.mp3'),
    Mouse: require('../../assets/sounds/Mouse.mp3'),
    Penguin: require('../../assets/sounds/Penguin.mp3'),
    Pig: require('../../assets/sounds/Pig.mp3'),
    Sheep: require('../../assets/sounds/Sheep.mp3'),
    Tiger: require('../../assets/sounds/Tiger.mp3'),
    Zebra: require('../../assets/sounds/Zebra.mp3'),
};

const RandomCardGame = () => {
    const [randomCard, setRandomCard] = useState({});
    const [sound, setSound] = useState();

    useEffect(() => {
        generateRandomCard();
    }, []);

    const generateRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        setRandomCard(cardImages[randomIndex]);
    };

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(sounds[randomCard.name]);
        setSound(sound);
        await sound.playAsync();
    };

    return (
        <View className='bg-[#C7E2E7]' style={styles.container}>
            <Text className='font-tone text-4xl' style={styles.cardName}>{randomCard.name}</Text>
            <Image source={randomCard.image} style={styles.cardImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Text className='font-tone text-2xl' style={styles.buttonText}>Play Sound</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={generateRandomCard}>
                    <Text className='font-tone text-2xl' style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7E2E7',
    },
    cardName: {
        color: '#23474E',
        marginBottom: 20,
        fontSize: 32,
    },
    cardImage: {
        width: 310,
        height: 350,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 310,
    },
    button: {
        backgroundColor: '#23474E',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default RandomCardGame;
