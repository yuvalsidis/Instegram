
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'postsDB'
const USER_KEY = 'userDB'
_createPosts()


export const postService = {
    query,
    getById,
    save,
    remove,
    getEmptyPost,
    getEmptyComment,
    getRandomImage,
    getDefualtFilterBy,
    addPostMsg
}
window.cs = postService


async function query(filterBy) {
    console.log(filterBy)
    let posts = await storageService.query(STORAGE_KEY)
    if(!filterBy._id){
        posts = posts.filter(post => post.by._id != filterBy.loggedInUser_id)
        return posts
    } 
    if(filterBy._id){
        posts = posts.filter(post => post.by._id === filterBy._id)
        return posts
    }
}

function getById(postId) {
    return storageService.get(STORAGE_KEY, postId)
}

async function remove(postId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, postId)
}

async function save(post) {
    var savedPost
    if (post._id) {
        savedPost = await storageService.put(STORAGE_KEY, post)
    } else {
        // Later, owner is set by the backend
        // post.owner = userService.getLoggedinUser() Adjust when implement user service
        savedPost = await storageService.post(STORAGE_KEY, post)
    }
    return savedPost
}

function getDefualtFilterBy() {
    return { _id: '', saved: '', loggedInUser_id: ''}
}

async function addPostMsg(postId, txt) {
    // Later, this is all done by the backend
    const post = await getById(postId)
    if (!post.msgs) post.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    post.msgs.push(msg)
    await storageService.put(STORAGE_KEY, post)

    return msg
}

function getEmptyPost() {
    return {
        _id: "",
        txt: "Best trip ever",
        imgUrl: "http://some-img",

        createdAt: new Date(),
        by: {
            _id: "u101",
            fullName: "Ulash Ulashi",
            imgUrl: "http://some-img"
        },
        loc: { // Optional
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        comments: [
            {
                id: "c1001",
                createdAt: new Date(),
                by: {
                    _id: "u105",
                    fullName: "Bob",
                    imgUrl: "http://some-img"
                },
                txt: "good one!",
                likedBy: [ // Optional
                    {
                        "_id": "u105",
                        "fullName": "Bob",
                        "imgUrl": "http://some-img"
                    }
                ]
            },
            {
                id: "c1002",
                createdAt: new Date(),
                by: {
                    _id: "u106",
                    fullName: "Dob",
                    imgUrl: "http://some-img"
                },
                txt: "not good!",
            }
        ],
        likedBy: [
            {
                _id: "u105",
                fullName: "Bob",
                imgUrl: "http://some-img"
            },
            {
                _id: "u106",
                fullName: "Dob",
                imgUrl: "http://some-img"
            }
        ],
        tags: ["fun", "romantic"]
    }
}

async function _createPosts() {
    let users = await storageService.query('user')
    let posts = await storageService.query(STORAGE_KEY)

    if (users.length > 0) {
        if (!posts || !posts.length) {
            console.log('No posts found, generating some...')
            for (let i = 0; i < 25; i++) {
                posts.push(_createPost(users))
            }
            utilService.saveToStorage(STORAGE_KEY, posts)
            console.log('Done generating posts')
        }
    }
}

function _createPost(users) {
    let post = getEmptyPost()
    let user = users[utilService.getRandomIntInclusive(0, users.length - 1)]
    console.log('user', user)
    post._id = utilService.makeId()
    post.txt = utilService.generatePostDescription()
    post.imgUrl = getRandomImage()


    post.by._id = user._id
    post.by.fullName = user.username
    post.by.imgUrl = user.imgUrl


    post.comments = []
    for (let i = 0; i < 10; i++) {
        post.comments.push(_createComment())
    }

    return post
}

function _createComment() {

    var comment = {
        id: utilService.makeId(),
        createdAt: new Date(),
        by: {
            _id: utilService.makeId(),
            fullName: utilService.getRandomName(),
            // imgUrl: "https://source.unsplash.com/random"
            imgUrl: getRandomImage()
        },
        txt: utilService.getRandomSentence(),
        likedBy: []
    }

    for (let i = 0; i < utilService.getRandomIntInclusive(1, 200); i++) {
        comment.likedBy.push(_createLike())
    }

    return comment
}

function _createLike() {
    return {
        _id: utilService.makeId(),
        fullName: utilService.getRandomName(),
        // imgUrl: "https://api.unsplash.com/photos/random"
        imgUrl: getRandomImage()
    }
}

function getEmptyComment() {
    return {
        id: utilService.makeId(),
        createdAt: "",
        by: {
            _id: "",
            fullName: "Lior Yo",
            // imgUrl: "https://api.unsplash.com/photos/random"
            imgUrl: getRandomImage()
        },
        txt: "",
        likedBy: [ // Optional
            {
                _id: "",
                fullName: "",
                // imgUrl: "https://api.unsplash.com/photos/random"
                imgUrl: getRandomImage()
            }
        ]
    }
}


// function _createDemoUser() {

// }

const images = [
    '../../public/img/1.png',
    '../../public/img/2.png',
    '../../public/img/3.png',
    '../../public/img/4.png',
    '../../public/img/5.png',
    '../../public/img/6.png',
    '../../public/img/7.png',
    '../../public/img/8.png',
    '../../public/img/9.png',
    '../../public/img/10.png',
    '../../public/img/11.png',
    '../../public/img/12.png',
    '../../public/img/13.png',
    '../../public/img/14.png',
    '../../public/img/15.png',
    '../../public/img/16.png',
    '../../public/img/17.png',
    '../../public/img/18.png',
    '../../public/img/19.png',
    '../../public/img/20.png',
    '../../public/img/21.png',
    '../../public/img/22.png',
    '../../public/img/23.png',
    '../../public/img/24.png',
    '../../public/img/25.png',
    '../../public/img/26.png',
    '../../public/img/27.png',
    '../../public/img/28.png',
    '../../public/img/29.png',
    '../../public/img/30.png',
    '../../public/img/31.png',
    '../../public/img/32.png',
    '../../public/img/33.png',
    '../../public/img/34.png',
    '../../public/img/35.png',
    '../../public/img/36.png',
    '../../public/img/37.png',
    '../../public/img/38.png',
    '../../public/img/39.png',
    '../../public/img/40.png',
    '../../public/img/41.png',
    '../../public/img/42.png',
    '../../public/img/43.png',
]

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

