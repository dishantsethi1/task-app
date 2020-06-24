const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cant contain password in it')
            }
        }

    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive no')
            }
        }

    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})


userschema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})


userschema.methods.toJSON = function () {
    const user = this
    const usero = user.toObject()
    delete usero.password
    delete usero.tokens
    delete usero.avatar
    return usero
}

userschema.methods.generateauthtoken = async function () {
    const user = this
    const token = jwt.sign({
        _id: user._id.toString()
    }, 'karanaujlaisbest')

    user.tokens = user.tokens.concat({
        token
    })
    await user.save()
    return token
}

userschema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({
        email: email
    })
    if (!user) throw new Error('uabale to log')

    const ismatch = await bcrypt.compare(password, user.password)
    if (!ismatch) throw new Error('login not possilble')

    return user
}

userschema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


userschema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({
        owner: req.user._id
    })

    next()
})

const User = mongoose.model('User', userschema)



module.exports = User