const { Schema, model } = require("mongoose");

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionID: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, max: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
