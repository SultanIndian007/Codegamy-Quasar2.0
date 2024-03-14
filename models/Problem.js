import {model, models, Schema} from "mongoose";

const problemSchema = Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    tags: {type: [String], default: []},
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy'},
  });
  
export const Problem = models?.Problem || model('Problem', problemSchema);