import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female'] },
  college: { type: String },
  city: {type: String},
  country: {type: String},
  phone: {type: String},
  admin: {type: Boolean, default: false},
  coursesEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  solved: [{ type: Schema.Types.ObjectId, ref: 'SolvedProblem' }]
}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);