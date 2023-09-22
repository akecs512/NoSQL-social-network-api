const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
  
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  } ,   
  { versionKey: false }, 
{
  
toJSON: {
    virtuals: true,
    getters: true,
  },
}
  

);
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
const User = model('user', userSchema);

module.exports = User;
