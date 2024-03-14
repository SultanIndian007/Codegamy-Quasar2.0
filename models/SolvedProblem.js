import {model, models, Schema} from "mongoose";

const SolvedProblemSchema = Schema({
    problem: {
      type: Schema.Types.ObjectId,
      ref: 'Problem',
      required: true
    },
    solutions: [{
        code: {
            type: String,
            required: true
        },
        complexity: {
            type: String,
            required: true
        },
        submissionTime: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
        }
    }],
    star: {type: Boolean}
  });
  
export const SolvedProblem = models?.SolvedProblem || model('SolvedProblem', SolvedProblemSchema);