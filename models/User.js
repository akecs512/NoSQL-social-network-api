const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  } ,    
{
  
toJSON: {
    virtuals: true,
}
  
}
);
const User = model('user', userSchema);

module.exports = User;
