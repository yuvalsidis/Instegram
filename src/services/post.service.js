
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

//REFACTOR

const STORAGE_KEY = 'post'

export const postService = {
    query,
    getById,
    save,
    remove,
    getEmptyPost,
    // addCarMsg
}
window.cs = postService


async function query(filterBy = { txt: 'all' }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(postId) {
    return httpService.get(`post/${postId}`)
}

async function remove(postId) {
    return httpService.delete(`post/${postId}`)
}
async function save(post) {
    var savedPost
    if (post._id) {
        savedPost = await httpService.put(`post/${post._id}`, post)

    } else {
        savedPost = await httpService.post('post', post)
    }
    return savedPost
}

// async function addCarMsg(carId, txt) {
//     const savedMsg = await httpService.post(`car/${carId}/msg`, {txt})
//     return savedMsg
// }


function getEmptyPost() {
    return {
        vendor  : 'Susita-' + (Date.now() % 1000),
        price: 0
    }
}






const post = {
    _id: "s101",
    txt: "Best trip ever",
    imgUrl: "http://some-img", 
    by: {
      _id: "u101",                                  //USER ID?
      fullname: "Ulash Ulashi",                      
      imgUrl: "http://some-img"                    //USER IMAGE?
    },
    loc: { // Optional
      lat: 11.11, 
      lng: 22.22,
      name: "Tel Aviv"
    },
    comments: [
      {
        id: "c1001",                     //COMMENT ID?
        by: {
          _id: "u105",                   //User ID?
          fullname: "Bob",
          imgUrl: "http://some-img"      //IMG USER?
        },
        txt: "good one!",
        likedBy: [ // Optional
          {
            "_id": "u105",                 //USER?
            "fullname": "Bob",
            "imgUrl": "http://some-img"     //IMG USER?
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
    tags: ["fun", "romantic"]               // TAGS OF POST
  }
  
  
  const user = {
    _id: "u101",
    username: "Muko",
    password: "mukmuk",
    fullname: "Muki Muka",
    imgUrl: "http://some-img",
    following: [
      {
        _id: "u106",                          //USER BEING FOLLOWED ID?
        fullname: "Dob",
        imgUrl: "http://some-img"              //USER FOLLOWED ID?
      }
    ],
    followers: [
      {
        _id: "u105",                          //USER BEING FOLLOWED ID?   
        fullname: "Bob",
        imgUrl: "http://some-img"              //USER FOLLOWED ID?
      }
    ],
    savedPostsIds: ["s104", "s111", "s123"] // even better - use mini-story
  }
  
  


