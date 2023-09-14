const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');


// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,   
        minLength: 15,
        maxLength: 500,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
        type: String,
        required: true, 
    },

  
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  });
const Thought = model('thought', thoughtSchema);


module.exports = Thought;
