import axios from "axios";

const url='http://localhost:8000';


export const addUser = async (data) => {
    // console.log(data);
    try {
        // console.log('RESPONSE');
        let response = await axios.post(`${url}/add`, data);
        // console.log('RESPONSE :: ' , response);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers=async()=>{
    try{
        // console.log('making  ')
        let res = await axios.get(`${url}/users`);
        // console.log('Api, getUser')
        // console.log(res);
        return res.data;
    }
    catch(e){
           console.log('Error while calling getUsers api',e.message);
    }
}


export const setConversation = async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }
    catch(e){
        console.log('Error while calling setConversation API', e.message);
    }
}


export const getConversation = async(data)=>{
    try{
        // console.log('getConvo ',data);
       let res= await axios.post(`${url}/conversation/get`,data);
       return res.data;
    }
    catch(e){
        console.log('Error while calling getConversation api',e.message);
    }
}


export const newMessage = async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
        // console.log('message sent and stored successfully')
    }
    catch(e){
        console.log('Error while calling new Message api ',e.message);
    }
}

export const getMessages = async(id)=>{
    try{
        let res = await axios.get(`${url}/message/get/${id}`);
        return res.data;
    }
    catch(e){
        console.log('Error while calling message Api',e.message);
    }
}


export const uploadFile= async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }
    catch(e){
        console.log('Error while calling uploadFile api',e.message)
    }
}