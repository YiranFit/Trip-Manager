import axios from 'axios';

export const signUp = async(name, email, password) => { 
    let response = await axios.post('/user/signup/', {
        'name': name,
        'email': email,
        'password': password
    })
    console.log(response.data.success)
    return response.data.success
}

export const logIn = async(email, password, setUser) => { 
    let response = await axios.post('/user/login/', {
        'email': email,
        'password': password
    })

    setUser(response.data)   
}

export const curruser = async() => { 
    let response = await axios.get('/user/curruser/')

    console.log(response.data.user)
    return response.data.user
}

