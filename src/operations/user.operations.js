const User = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utils/bcrypt.utils");
const { generateToken } = require("../utils/jwt.utils");

let users = [];

const registerUser = async (name, email, password) => {
    try {
        const existingUser = users.find(user => user.email === email);
        if(existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User(users.length + 1, name, email, hashedPassword);
        users.push(newUser);
        return newUser;
    } catch (error) {
        console.error(error);
        throw new Error("User registration failed")
    }
}

const loginUser = async (email, password) => {
    try {
        const user = users.find(user => user.email === email);
        if(!user) {
            throw new Error("User not found");
        }
        const passwordMatch = await comparePassword(password,user.password)
        if(!passwordMatch){
            throw new Error("Password doesn't match");
        }
        const token = generateToken({id: user.id, email: user.email});
        return token;
    } catch (error) {
        console.error(error);
        throw new Error("User login failed");
    }
}

const getUser = (id) => {
    try {
        const user = users.find(user => user.id === id);
        if(!user){
            throw new Error("User not found");
        }
        return {
            id: user.id,
            name: user.name, 
            email: user.email
        }
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the user");
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
}