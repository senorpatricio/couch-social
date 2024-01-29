import user from '../assets/data/user.json'
import posts from '../assets/data/posts.json'


function getUser() {
    // console.log('user feed', user)
    const UserPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user.user)
            reject('Not logged in.')
        }, 500)
    })
    return UserPromise
}

function getPosts() {
    const PostsPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts)
            reject('Couldn\'t get posts.')
        }, 1000)
    })
    return PostsPromise
}

function getProfileInfo() {
    const ProfilePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
            reject('Couldn\'t get posts.')
        }, 1000)
    })
    return ProfilePromise
}


export { getUser, getPosts, getProfileInfo }