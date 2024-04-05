export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    getRandomName,
    getRandomSentence,
    generatePostDescription,
    getTimeSinceCreation,
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getRandomName() {
    const names = ['John Holland', 'Tomer Ginat', 'Bar Timor', 'Gil Benny', 'Idan Zalmanson', 'Jonathan Rabinovich', 'Gal Shternberg', 'Tomre Bar', 'Shay Zicher', 'Michal Shaked', 'Danny Franco', 'Barak Bachar', 'Guy Barkai', 'Rotem Sela', 'Yonatan Ader', 'Will Cummings', 'Michal Dar', 'Noy Gold', 'Keren Sela', 'Nofar Levy', 'Noam Banai', 'Yael Gil', 'Naama Caseri']
    const name = names[getRandomIntInclusive(0, names.length - 1)]
    return name
}

function getTimeSinceCreation(creationTime) {
    const creationTimeNumber = new Date(creationTime);
    console.log(creationTimeNumber)
    const now = new Date();
    const elapsedTimeInSeconds = Math.floor((now - creationTimeNumber ) / 1000);
    console.log(elapsedTimeInSeconds)

    if (elapsedTimeInSeconds < 60) {
        return `${elapsedTimeInSeconds}s`;
    }

    const elapsedTimeInMinutes = Math.floor(elapsedTimeInSeconds / 60);
    const elapsedTimeInHours = Math.floor(elapsedTimeInSeconds / (60 * 60));
    const elapsedTimeInDays = Math.floor(elapsedTimeInSeconds / (60 * 60 * 24));
    const elapsedTimeInWeeks = Math.floor(elapsedTimeInSeconds / (60 * 60 * 24 * 7));

    if (elapsedTimeInMinutes < 60) {
        return `${elapsedTimeInMinutes}m`;
    } else if (elapsedTimeInHours < 24) {
        return `${elapsedTimeInHours}h`;
    } else if (elapsedTimeInDays < 7) {
        return `${elapsedTimeInDays}d`;
    } else {
        return `${elapsedTimeInWeeks}w`;
    }
}

function getRandomSentence() {
    const sentences = ['Amazing photo',
    'Looks wonderful',
    'Wow!!',
    'You are the best!',
    'Miss youuuuu',
    'What a frame!',
    'I can look at this all day',
    'This picture is amazing',
    'You are talented my friend',
    'Very inspiring',
    'This looks great',
    'I love it!',
    'Like!',
    'Wowww!!',
    'Awesome',
    'Love this pic!',
    'Very nice',
    'Cool pic',
    '❤️',
    'Wow! 🚀',
    'I love it 😍',
    'Perfect 👍🏽👍🏽👍🏽']
    const sentence = sentences[getRandomIntInclusive(0, sentences.length - 1)]
    return sentence
}

function generatePostDescription() {
    const descriptions = [
        // Three words
        "Life is beautiful",
        "Dream big dreams",
        "Love conquers all",

        // Ten words
        "Chasing dreams, one step at a time, towards tomorrow.",
        "Lost in thought, finding solace in the gentle breeze.",
        "Sunset whispers secrets, painting the sky with hues of gold.",

        // Four words
        "Chasing dreams, finding happiness.",
        "Lost in thought, wandering aimlessly.",
        "Sunsets bring peace.",

        // Fifteen words
        "Underneath the starlit sky, dreams take flight on wings of hope, reaching for the infinite expanse above.",
        "Footprints in the sand, traces of a story written by the waves, whispered secrets of the ocean breeze.",
        "Drifting through the cosmos, chasing stars in the night sky, finding solace in the vastness of the universe.",

        // Twenty words
        "Reflections on life's twists and turns, finding beauty in imperfections, embracing the journey with an open heart.",
        "Whispers of the past, echoes of memories long cherished, lingering in the quiet corners of the mind.",
        "In the dance of shadows and light, beauty finds its true form, revealing the essence of the world around us.",

        // Fifty words
        "Lost in the magic of a sun-kissed afternoon, chasing dreams through fields of gold, capturing moments that last a lifetime, in the blink of an eye, under the watchful gaze of a thousand stars, painting stories on the canvas of the sky, where dreams come to life.",
        "Beneath the city lights, shadows dance to the rhythm of life, weaving tales of love and longing, whispers of secrets shared in quiet moments, amidst the hustle and bustle of a vibrant city, where dreams take flight on the wings of imagination.",
        "Footprints in the sand, traces of a story written by the waves, whispered secrets of the ocean breeze, echoing through the corridors of time, carrying memories of adventures past, into the unknown horizon, where the sea meets the sky, and dreams merge with reality.",

        // Thirty-five words
        "Lost in a world of books, where every page holds a new adventure, and every word paints a vivid picture, capturing the imagination and sparking dreams, in the quiet moments of solitude, where stories come to life and reality fades away.",
        "Embracing solitude, finding solace in the silence of the night, where thoughts wander and dreams take flight, amidst the stars that shine brightly in the dark expanse above, guiding the way to new horizons and endless possibilities.",
        "The rhythm of life: a symphony of moments, each a melody, harmonizing in the grand orchestration of existence, weaving tales of love and loss, hope and despair, laughter and tears, in the tapestry of time, where every thread is a story waiting to be told."
    ];

    const description = descriptions[getRandomIntInclusive(0, descriptions.length - 1)]
    console.log( description)
    return description;
}