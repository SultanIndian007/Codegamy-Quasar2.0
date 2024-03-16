import {model, models, Schema} from "mongoose";

const QueueSchema = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' }, 
    peerViedo: { type: Schema.Types.ObjectId, ref: 'PeerViedo' }, 
    UserRating: { type: Number },
});

export const Queue = models?.Queue || model('Queue', QueueSchema);