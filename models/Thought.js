const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
      required: false,
    },
    reactions: [reactionSchema],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  },
  { versionKey: false }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
