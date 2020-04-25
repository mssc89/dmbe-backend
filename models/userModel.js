const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
    }]
});

//before saving, hash password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
  }
  if(user.registerDate == null){
      this.registerDate = new Date();
  }
  next();
})

//generate jwt token
userSchema.methods.generateToken = async function() {
  const user = this;
  const token = jwt.sign({_id: user._id}, process.env.jwtKey);
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
}

//find user in db
userSchema.statics.findUser = async (username, password) => {
  const user = await User.findOne({ username } );
  if (!user) {
      throw new Error('No such user');
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
      throw new Error('Passwords do not match');
  }
  return user;
}

var User = module.exports = mongoose.model('user', userSchema);
