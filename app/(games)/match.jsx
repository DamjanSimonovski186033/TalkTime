import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const cardImages = [
    { id: 1, image: require('../../assets/cards/Bear.png') },
    { id: 2, image: require('../../assets/cards/Cat.png') },
    { id: 3, image: require('../../assets/cards/Chicken.png') },
    { id: 4, image: require('../../assets/cards/Cow.png') },
    { id: 5, image: require('../../assets/cards/Crocodile.png') },
    { id: 6, image: require('../../assets/cards/Dog.png') },
    { id: 7, image: require('../../assets/cards/Elephant.png') },
    { id: 8, image: require('../../assets/cards/Fox.png') },
    { id: 9, image: require('../../assets/cards/Giraffe.png') },
    { id: 10, image: require('../../assets/cards/Horse.png') },
    { id: 11, image: require('../../assets/cards/Koala.png') },
    { id: 12, image: require('../../assets/cards/Lion.png') },
    { id: 13, image: require('../../assets/cards/Monkey.png') },
    { id: 14, image: require('../../assets/cards/Mouse.png') },
    { id: 15, image: require('../../assets/cards/Penguin.png') },
    { id: 16, image: require('../../assets/cards/Pig.png') },
    { id: 17, image: require('../../assets/cards/Sheep.png') },
    { id: 18, image: require('../../assets/cards/Tiger.png') },
    { id: 19, image: require('../../assets/cards/Zebra.png') },
];

const Match = () => {
    const navigation = useNavigation();
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [gameCompleted, setGameCompleted] = useState(false);
    const numColumns = 3; // Set the number of columns

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        setGameCompleted(false);

        const selectedUnique = shuffleArray(cardImages).slice(0, 6);

        const duplicatedCards = selectedUnique.flatMap(card => [
            {
                uniqueId: `${card.id}-1`,
                cardId: card.id,
                image: card.image,
                flipped: false,
                matched: false
            },
            {
                uniqueId: `${card.id}-2`,
                cardId: card.id,
                image: card.image,
                flipped: false,
                matched: false
            }
        ]);

        const shuffledCards = shuffleArray(duplicatedCards);
        setCards(shuffledCards);
        setFlippedCards([]);
    };

    const shuffleArray = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const handleCardPress = (index) => {
        const selectedCard = cards[index];

        if (
            flippedCards.length === 2 ||
            flippedCards.includes(index) ||
            selectedCard.matched ||
            gameCompleted
        ) {
            return;
        }

        const newFlippedCards = [...flippedCards, index];
        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            const [first, second] = newFlippedCards;
            if (newCards[first].cardId === newCards[second].cardId) {
                newCards[first].matched = true;
                newCards[second].matched = true;
                setCards(newCards);
                setFlippedCards([]);

                if (newCards.every(card => card.matched)) {
                    setGameCompleted(true);
                }
            } else {
                setTimeout(() => {
                    const updatedCards = [...newCards];
                    updatedCards[first].flipped = false;
                    updatedCards[second].flipped = false;
                    setCards(updatedCards);
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const renderCard = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.cardTouchable}
                onPress={() => handleCardPress(index)}
                activeOpacity={0.8}
            >
                <Image
                    source={item.flipped || item.matched ? item.image : require('../../assets/cards/Back.png')}
                    style={styles.cardImage}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View className='h-[85vh] justify-center items-center' style={[styles.container, gameCompleted && styles.completedContainer]}>
            {gameCompleted && (
                <View style={styles.completedOverlay}>
                    <Text style={styles.completedText} className='font-tone'>Great Job!</Text>
                    <TouchableOpacity style={styles.playAgainButton} onPress={initializeGame}>
                        <Text style={styles.playAgainText} className='font-tone'>Play Again</Text>
                    </TouchableOpacity>
                </View>
            )}

            {!gameCompleted && (
                <Text style={styles.title} className='font-tone'>Match the Cards</Text>
            )}

            <View className='h-[70%] justify-center items-center'>
                <FlatList
                    data={cards}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.uniqueId}
                    numColumns={numColumns}
                    contentContainerStyle={styles.cardContainer}
                    key={numColumns}
                    extraData={cards}
                />
            </View>
        </View>
    );
};

export default Match;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7E2E7',
        position: 'relative',
    },
    completedContainer: {
        backgroundColor: '#5BA06A',
    },
    backButton: {
        position: 'absolute',
        paddingTop: 20,
        left: 20,
        zIndex: 2,
        padding: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#23474E',
        marginBottom: 20,
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTouchable: {
        margin: 10,
        width: 100, // Fixed width for each card
        height: 130, // Fixed height for each card
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    infoContainer: {
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        color: '#23474E',
    },
    completedOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#5BA06A',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    completedText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#23474E',
        marginBottom: 20,
    },
    playAgainButton: {
        backgroundColor: '#23474E',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    playAgainText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
