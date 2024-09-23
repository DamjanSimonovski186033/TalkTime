import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    Image, 
    TouchableOpacity 
} from 'react-native';

const cardImages = [
    { id: 1, image: require('../../assets/cards/Bear.png'), name: 'Bears' },
    { id: 2, image: require('../../assets/cards/Cat.png'), name: 'Cats' },
    { id: 3, image: require('../../assets/cards/Chicken.png'), name: 'Chickens' },
    { id: 4, image: require('../../assets/cards/Cow.png'), name: 'Cows' },
    { id: 5, image: require('../../assets/cards/Crocodile.png'), name: 'Crocodiles' },
    { id: 6, image: require('../../assets/cards/Dog.png'), name: 'Dogs' },
    { id: 7, image: require('../../assets/cards/Elephant.png'), name: 'Elephants' },
    { id: 8, image: require('../../assets/cards/Fox.png'), name: 'Foxes' },
    { id: 9, image: require('../../assets/cards/Giraffe.png'), name: 'Giraffes' },
    { id: 10, image: require('../../assets/cards/Horse.png'), name: 'Horses' },
    { id: 11, image: require('../../assets/cards/Koala.png'), name: 'Koalas' },
    { id: 12, image: require('../../assets/cards/Lion.png'), name: 'Lions' },
    { id: 13, image: require('../../assets/cards/Monkey.png'), name: 'Monkeys' },
    { id: 14, image: require('../../assets/cards/Mouse.png'), name: 'Mice' },
    { id: 15, image: require('../../assets/cards/Penguin.png'), name: 'Penguins' },
    { id: 16, image: require('../../assets/cards/Pig.png'), name: 'Pigs' },
    { id: 17, image: require('../../assets/cards/Sheep.png'), name: 'Sheep' },
    { id: 18, image: require('../../assets/cards/Tiger.png'), name: 'Tigers' },
    { id: 19, image: require('../../assets/cards/Zebra.png'), name: 'Zebras' },
];

const CountTheCardsGame = () => {
    const [cards, setCards] = useState([]);
    const [targetCard, setTargetCard] = useState('');
    const [targetCount, setTargetCount] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [gameCompleted, setGameCompleted] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const randomCount = Math.floor(Math.random() * 12) + 1; // 1 to 12
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const chosenCard = cardImages[randomIndex];
        const chosenCards = Array.from({ length: randomCount }, () => chosenCard);

        // Get 12 unique cards excluding the chosen card
        const randomCards = cardImages.filter(card => card.id !== chosenCard.id);
        const shuffledRandomCards = shuffleArray(randomCards).slice(0, 12 - randomCount);

        const allCards = shuffleArray([...chosenCards, ...shuffledRandomCards]);
        setCards(allCards);
        setTargetCard(chosenCard.name);
        setTargetCount(randomCount);
        setGameCompleted(false);
        setUserInput('');
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleInputChange = (input) => {
        const numericInput = parseInt(input);
        setUserInput(input);
        if (numericInput === targetCount) {
            setGameCompleted(true);
        }
    };

    return (
        <View style={styles.container}>
            {!gameCompleted ? (
                <>
                    <Text className='font-tone' style={styles.header}>Count the {targetCard}</Text>
                    <View style={styles.grid}>
                        {cards.map((card, index) => (
                            <Image 
                                key={index} 
                                source={card.image} 
                                style={styles.cardImage} 
                            />
                        ))}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            className='font-tone'
                            style={styles.input}
                            keyboardType="numeric"
                            value={userInput}
                            onChangeText={handleInputChange}
                            placeholder="Enter the count"
                            placeholderTextColor="#FFFFFF"
                        />
                    </View>
                </>
            ) : (
                <View style={styles.completedOverlay}>
                    <Text style={styles.completedText}>Great Job!</Text>
                    <TouchableOpacity 
                        style={styles.playAgainButton} 
                        onPress={initializeGame}
                    >
                        <Text style={styles.playAgainText}>Play Again</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7E2E7',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#23474E',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
    },
    cardImage: {
        width: 80,
        height: 90,
        margin: 5,
        borderRadius: 10,
    },
    inputWrapper: {
        borderColor: '#84B1BA',
        borderWidth: 2,
        backgroundColor: '#84B1BA',
        borderRadius: 10,
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        color: '#23474E',
        fontSize: 18,
        textAlign: 'center',
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

export default CountTheCardsGame;
