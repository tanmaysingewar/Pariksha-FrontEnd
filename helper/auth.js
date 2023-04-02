const { API } = require("../backend");

export const authincate = (data)=> {

    if (JSON.stringify(data.error)) {
        return ''
    }
    if (typeof window !== 'undefined') {
        localStorage.setItem('login_user',JSON.stringify({token : data.token, user : data}))
    }
}


export const isAuthincated =()=> {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('login_user')) {
        return JSON.parse(localStorage.getItem('login_user'))
    }else{
        return false
    }
}


