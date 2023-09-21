const { Schema, model } = require('mongoose');


// Schema to create Thought model
const reactionSchema = new Schema(
  {
    reactions_id: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
    reactionBody: {
        type: String,
        required: true,   
        maxLength: 280,
    },
    username: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },

  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// thoughtSchema
//   .virtual('reactionCount')
//   // Getter
//   .get(function () {
//     return this.reaction.length;
//   });

const Reaction = model('reaction', reactionSchema);


module.exports = Reaction;