export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function getUserData(){
    sessionStorage.getItem('userData')
}

export function clearUserData(){
    sessionStorage.removeItem('userData')
}