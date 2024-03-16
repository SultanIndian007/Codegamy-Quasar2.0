import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ['Male', 'Female'] },
  college: { type: String },
  city: {type: String},
  country: {type: String},
  phone: {type: String},
  admin: {type: Boolean, default: false},
  coursesEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Course',default: [] }],
  solved: [{ type: Schema.Types.ObjectId, ref: 'SolvedProblem', default: [] }],
  contestPart: [{ type: Schema.Types.ObjectId, ref: 'Contest', default: [] , problemSolved: [ { type: Schema.Types.ObjectId, ref: 'SolvedProblem', default: [] }]}],
  peerVideo: [{ type: Schema.Types.ObjectId, ref: 'PeerVideo', default: [] }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'peerVideoReview', default: [] }],
  rating: {type: Number, default: 0},
  assigned: [{ type: Schema.Types.ObjectId, ref: 'Queue', default: [],  }],
  assignedTime: [{ type: Date,  default: [],  }],


}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);