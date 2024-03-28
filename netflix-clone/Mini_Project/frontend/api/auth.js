import client from './client.js'
const login=(email,password)=>client.post('/api/user_Log',{email,password});
const register=(name,email,password)=>client.post('/api/user_Reg',{name,email,password});
const addPlan=(selected,price)=>client.post('/api/addPlan',{selected,price});


export default {login, register, addPlan}