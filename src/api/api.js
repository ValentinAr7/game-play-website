import { clearUserData, getUserData } from "../util.js"

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

    try{
        const res = fetch (host + url, options)

        if(res.ok == false){
            if(res.status == 403){
                clearUserData()
            }
            const error = await res.json();
            throw new Error(error.message)
        }

        if(res.status == 204){
            return res
        } else {
            return res.json();
        }
    } catch (err){
        alert(err.message)
        throw err
    }
}


