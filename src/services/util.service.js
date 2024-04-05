export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    getRandomName,
    getRandomSentence
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
    const now = new Date();
    const elapsedTimeInSeconds = Math.floor((now - creationTime) / 1000);

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

