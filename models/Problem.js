import {model, models, Schema} from "mongoose";

const ProblemSchema = Schema({
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
    companies: {type: [String], default: []},
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy'},
    solution: {type: String},
    videoSol: {type: String},
    testCases: [{
      input: { type: String, required: true },
      output: { type: String, required: true },
    }],
  });
  
export const Problem = models?.Problem || model('Problem', ProblemSchema);