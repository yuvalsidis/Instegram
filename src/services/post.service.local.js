
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'post'

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

        createdAt: new Date(),
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

async function _createPosts() {
    let posts = await storageService.query(STORAGE_KEY)
    if (!posts || !posts.length) {
        console.log('No posts found, generating some...')
        for (let i = 0; i < 15; i++) {
            posts.push(_createPost())
        }
        utilService.saveToStorage(STORAGE_KEY,posts)
        console.log('Done generating posts')
    }
}

function _createPost() {
    var post = getEmptyPost()

    post._id = utilService.makeId()
    post.txt = utilService.getRandomSentence()
    post.imgUrl = "https://source.unsplash.com/random"

    post.by._id = utilService.makeId()
    post.by.fullname = utilService.getRandomName()
    post.by.imgUrl = "https://source.unsplash.com/random"

    post.comments = []
    for (let i = 0; i < 8; i++) {
        post.comments.push(_createComment())
    }

    return post
}

function _createComment() {

    var comment = {
        id: utilService.makeId(),
        by: {
            _id: utilService.makeId(),
            fullName: utilService.getRandomName(),
            imgUrl: "https://source.unsplash.com/random"
        },
        txt: utilService.getRandomSentence(),
        likedBy: []
    }

    for (let i = 0; i < 5; i++) {
        comment.likedBy.push(_createLike())
    }

    return comment
}

function _createLike() {
    return {
        _id: utilService.makeId(),
        fullname: utilService.getRandomName(),
        imgUrl: "https://api.unsplash.com/photos/random"
    }
}

function _createDemoUser() {

}

