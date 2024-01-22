import axios from 'axios'

//methodPOST // SEND CREDENTIALS
export const getToken = async(login) => {
    try {
        const url = "http://localhost:3001/api/v1/user/login"
        const response = await axios.post(url, login)
        const res = response.data
        console.log("token", res)
        return res
    } catch (e) {
        console.error('getToken error: ', e)
        throw e
    }  
}

//methodPOST // GET DATA
export const getUserProfile = async(token) => {
    try {
        const url = "http://localhost:3001/api/v1/user/profile"
        const response = await axios.post(url,{}, {
            headers: {
                        Authorization: `Bearer ${token}`,
            },
        })
        console.log("userProfile ", response.data.body)
        return response.data.body
        // ⬇︎ can't use model here because of serialization flag with redux ⬇︎
        //return new UserProfile(response.data.body)
    }
    catch (e){
        console.error('getUserProfile error: ', e)
        throw e
    }
}

//methodPUT //UPDATE PROFILE
export const putUserProfile = async (data, token) => {
    try {
        const url = "http://localhost:3001/api/v1/user/profile"
        const response = await axios.put(url, data , {
            headers: {
                        Authorization: `Bearer ${token}`,
            },
        })
        console.log('Update successful:', response.data)
    }
    catch (e) {
        console.error('putUserProfile error: ', e)
        throw e
    }
}