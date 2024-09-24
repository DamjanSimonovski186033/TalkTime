import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const cardImages = [
    { id: 1, image: require('../../assets/cards/Bear.png'), name: 'Мечка' },
    { id: 2, image: require('../../assets/cards/Cat.png'), name: 'Мачка' },
    { id: 3, image: require('../../assets/cards/Chicken.png'), name: 'Кокошка' },
    { id: 4, image: require('../../assets/cards/Cow.png'), name: 'Крава' },
    { id: 5, image: require('../../assets/cards/Crocodile.png'), name: 'Крокодил' },
    { id: 6, image: require('../../assets/cards/Dog.png'), name: 'Куче' },
    { id: 7, image: require('../../assets/cards/Elephant.png'), name: 'Слон' },
    { id: 8, image: require('../../assets/cards/Fox.png'), name: 'Лисица' },
    { id: 9, image: require('../../assets/cards/Giraffe.png'), name: 'Жирафа' },
    { id: 10, image: require('../../assets/cards/Horse.png'), name: 'Коњ' },
    { id: 11, image: require('../../assets/cards/Koala.png'), name: 'Коала' },
    { id: 12, image: require('../../assets/cards/Lion.png'), name: 'Лав' },
    { id: 13, image: require('../../assets/cards/Monkey.png'), name: 'Мајмун' },
    { id: 14, image: require('../../assets/cards/Mouse.png'), name: 'Глушец' },
    { id: 15, image: require('../../assets/cards/Penguin.png'), name: 'Пингвин' },
    { id: 16, image: require('../../assets/cards/Pig.png'), name: 'Прасе' },
    { id: 17, image: require('../../assets/cards/Sheep.png'), name: 'Овца' },
    { id: 18, image: require('../../assets/cards/Tiger.png'), name: 'Тигар' },
    { id: 19, image: require('../../assets/cards/Zebra.png'), name: 'Зебра' },
];

const sounds = {
    Мечка: require('../../assets/sounds/Bear.mp3'),
    Мачка: require('../../assets/sounds/Cat.mp3'),
    Кокошка: require('../../assets/sounds/Chicken.mp3'),
    Крава: require('../../assets/sounds/Cow.mp3'),
    Крокодил: require('../../assets/sounds/Crocodile.mp3'),
    Куче: require('../../assets/sounds/Dog.mp3'),
    Слон: require('../../assets/sounds/Elephant.mp3'),
    Лисица: require('../../assets/sounds/Fox.mp3'),
    Жирафа: require('../../assets/sounds/Giraffe.mp3'),
    Коњ: require('../../assets/sounds/Horse.mp3'),
    Коала: require('../../assets/sounds/Koala.mp3'),
    Лав: require('../../assets/sounds/Lion.mp3'),
    Мајмун: require('../../assets/sounds/Monkey.mp3'),
    Глушец: require('../../assets/sounds/Mouse.mp3'),
    Пингвин: require('../../assets/sounds/Penguin.mp3'),
    Прасе: require('../../assets/sounds/Pig.mp3'),
    Овца: require('../../assets/sounds/Sheep.mp3'),
    Тигар: require('../../assets/sounds/Tiger.mp3'),
    Зебра: require('../../assets/sounds/Zebra.mp3'),
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
                    <Text className='font-tone text-2xl' style={styles.buttonText}>Звук</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={generateRandomCard}>
                    <Text className='font-tone text-2xl' style={styles.buttonText}>Следно</Text>
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
