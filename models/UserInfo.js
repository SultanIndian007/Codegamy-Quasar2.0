import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female'] },
  college: { type: String },
  city: {type: String},
  country: {type: String},
  phone: {type: String},
  admin: {type: Boolean, default: false},
  coursesEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  solved: [{ type: Schema.Types.ObjectId, ref: 'SolvedProblem' }],
  contestPart: [{ type: Schema.Types.ObjectId, ref: 'Contest' }],
  peerVideo: [{ type: Schema.Types.ObjectId, ref: 'PeerVideo' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'PeerViedoReview' }],

}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);