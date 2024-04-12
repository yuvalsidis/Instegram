import { Email } from '@mui/icons-material'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'
import { info } from 'sass'


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    // changeScore
}

window.userService = userService


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(_id, updateUser) {
    let user = await storageService.get('user', _id)
    user = updateUser
    await storageService.put('user', user)

    // const user = await httpService.put(`user/${_id}`, {_id, score})

    // When admin updates other user's details, do not update loggedinUser
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) return saveLocalUser(user)
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = "../../public/img/default-user-img.png"
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

function saveLocalUser(user) {
    user = {
        _id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        isAdmin: user.isAdmin,
        info: user.info,
        imgUrl: user.imgUrl
    }

    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}







//DEMO DATA CREATE USER
_createUsers()

async function _createUsers() {

    try {
        let users = await storageService.query('user')
        if (!users || !users.length) {
            await Promise.all([
                await userService.signup(_createUser('Adi', 'Sidis', '123', false, 'adisidis', 'adisidis@gmail.com', '../../public/img/1.png')),
                await userService.signup(_createUser('Admin', 'Admin', '123', true, 'adminadmin', 'adminadmin@gmail.com', '../../public/img/2.png')),
                await userService.signup(_createUser('Lidor', 'Cohen', '123', false, 'lidorchoen', 'lidorcohen@gmail.com', '../../public/img/3.png')),
                await userService.signup(_createUser('Lior', 'Former', '123', false, 'liorformer', 'liorformer@gmail.com', '../../public/img/4.png')),
                await userService.signup(_createUser('Yotam', 'Levi', '123', false, 'yotamlevi', 'sagiaivas@gmail.com', '../../public/img/5.png')),
                await userService.signup(_createUser('Elad', 'Mizrahi', '123', false, 'eladmizrahi', 'eladmizrahi@gmail.com', '../../public/img/6.png')),
                await userService.signup(_createUser('Noa', 'Cohen', '123', false, 'noacohen', 'noacohen@gmail.com', '../../public/img/8.png')),
                await userService.signup(_createUser('Amir', 'Yomtov', '123', false, 'amiryomtov', 'amiryomtov@gmail.com', '../../public/img/9.png')),
                await userService.signup(_createUser('Doron', 'Peretz', '123', false, 'doronperetz', 'doronperetz@gmail.com', '../../public/img/10.png')),
                await userService.signup(_createUser('Eyal', 'Sabach', '123', false, 'eyalsabah', 'eyalsabah@gmail.com', '../../public/img/7.png'))
            ]);
            try {
                let updatedUsers = await storageService.query('user');
                updatedUsers.forEach(user => {
                    createFollows(user, updatedUsers);
                });
            } catch (err) {
                console.log('cannot create followers in userService', err);
            }
        }

    }
    catch (err) {
        console.log('Error by trying to get user in post service', err)
        throw err
    }
}

//DEMO DATA USER

function _createUser(firstname, lastname, password, isAdmin = false, username, email, imgUrl) {
    return {
        _id: utilService.makeId(),
        email,
        firstname,
        lastname,
        username,
        password,
        isAdmin,
        imgUrl,
        info: {
            posts: '13',
            followers: [

            ],
            following: [

            ]
        }
    }
}

async function createFollows(userToUpdate, updatedUsers) {
    const updatedUser = { ...userToUpdate };
    const randomIteration = utilService.getRandomIntInclusive(0, updatedUsers.length - 1)
    for (var i = 0; i <= randomIteration; i++) {
        if (updatedUsers[i]._id != updatedUser._id) {
            const updateUserFollowing = { ...updatedUsers[i] }
            updatedUser.info.followers.push(
                {
                    _id: updatedUsers[i]._id,
                    username: updatedUsers[i].username,
                    firstname: updatedUsers[i].firstname,
                    lastname: updatedUsers[i].lastname,
                    imgUrl: updatedUsers[i].imgUrl
                }
            )
            updateUserFollowing.info.following.push(
                {
                    _id: updatedUser._id,
                    username: updatedUser.username,
                    firstname: updatedUser.firstname,
                    lastname: updatedUser.lastname,
                    imgUrl: updatedUser.imgUrl
                }
            )

            await update(updatedUser._id, updatedUser)
            await update(updateUserFollowing._id, updateUserFollowing)
        }
    }
}


