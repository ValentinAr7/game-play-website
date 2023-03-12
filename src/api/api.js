import { getUserData } from "../util.js"

let host = 'http://localhost:3030'

async function request(url, method, data){
    const options = {
        method,
        headers: {}
    }

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json'
        options.body = Json.stringify(data)
    }

    let userData = getUserData()

    if(userData){
        options.headers['X-Authorization'] = userData.accessToken
    }

    
}