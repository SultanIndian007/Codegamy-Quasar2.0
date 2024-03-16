import {model, models, Schema} from "mongoose";

const PeerViedoReviewSchema = Schema({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User' }, 
    peerViedo: { type: Schema.Types.ObjectId, ref: 'PeerViedo' }, 
    rating: { type: Number }, 
    comment: { type: String}, 
    reviewTime: { type: Date },
    assignedTime: {type: Date,default: Date.now },
    feedback: Number
});

export const PeerViedoReview = models?.PeerViedoReview || model('PeerViedoReview', PeerViedoReviewSchema);