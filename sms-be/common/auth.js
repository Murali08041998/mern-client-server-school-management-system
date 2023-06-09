const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const SALT=10;
const secret='IsfgbdedSDFGLQWRRT1F7Ya'

const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(SALT)
    let hash = await bcrypt.hash(password,salt)
    return hash
}

const hashCompare = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

const createToken = async(payload)=>{
    let token = await jwt.sign(payload,secret,{expiresIn:'5m'})
    return token
}

const decodeToken = async(token)=>{
    let data = await jwt.decode(token)
    return data
    console.log(data)
}

module.exports={hashPassword,hashCompare,createToken,decodeToken}