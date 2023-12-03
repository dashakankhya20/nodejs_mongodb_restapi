import { model, Schema } from "mongoose";

const userSchema = new Schema({

    first_name: {
        type: String,
        required: [true, "Please enter your firstname"]
    },
    last_name: {
        type: String,
        required: [true, "Please enter your lastname"]
    },
    age: {
        type: Number,
        required: [true, "Please enter your age"]
    }, 
    image: {
        type: String, 
        required: false
    },
})

const User = model('User', userSchema);
export default User;