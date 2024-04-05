
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'post'
console.log('hi i am in post service')

_createPosts()

export const postService = {
    query,
    getById,
    save,
    remove,
    getEmptyPost,
    addPostMsg
}
window.cs = postService


async function query() {
    var posts = await storageService.query(STORAGE_KEY)
    return posts
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
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
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
                by: {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "http://some-img"
                },
                txt: "good one!",
                likedBy: [ // Optional
                    {
                        "_id": "u105",
                        "fullname": "Bob",
                        "imgUrl": "http://some-img"
                    }
                ]
            },
            {
                id: "c1002",
                by: {
                    _id: "u106",
                    fullname: "Dob",
                    imgUrl: "http://some-img"
                },
                txt: "not good!",
            }
        ],
        likedBy: [
            {
                _id: "u105",
                fullname: "Bob",
                imgUrl: "http://some-img"
            },
            {
                _id: "u106",
                fullname: "Dob",
                imgUrl: "http://some-img"
            }
        ],
        tags: ["fun", "romantic"]
    }
}



// FOR DEMO DATA

function _createPosts() {
    const posts = []
    for (var i = 0; i <= 15; i++){
        posts.push(_createPost())
    }
    console.log(posts)
}

function _createPost() {
    console.log('hi i am in the create post')
    const post = getEmptyPost()
    const randomComments = utilService.getRandomIntInclusive(1, 5)
    const randomLikes = utilService.getRandomIntInclusive(1, 100)

    post._id = utilService.makeId()
    post.txt = utilService.makeLorem(utilService.getRandomIntInclusive(5, 50))
    post.imgUrl = "https://api.unsplash.com/photos/random"

    post.by.id = utilService.makeId()
    post.by.fullname = utilService.makeLorem(2)
    post.by.imgUrl = "https://api.unsplash.com/photos/random"

    post.comments = []
    for (var i = 0; i <= randomComments; i++) {
        post.comments.push(_createComment())
    }
    post.likedBy = []
    for (var j = 0; j <= randomLikes; j++) {
        post.likedBy.push(_createLikes)
    }

    return post
}



function _createComment() {
    return {
        id: utilService.makeId(),
        by: {
            _id: utilService.makeId(),
            fullname: utilService.makeLorem(2),
            imgUrl: "https://api.unsplash.com/photos/random"
        },
        txt: "good one!",
        likedBy: [
            {
                "_id": utilService.makeId(),
                "fullname": utilService.makeLorem(2),
                "imgUrl": "https://api.unsplash.com/photos/random"
            }
        ]
    }
}

function _createLikes() {
    return {
        _id: utilService.makeId(),
        fullname: utilService.makeLorem(2),
        imgUrl: "https://api.unsplash.com/photos/random"
    }

}

