import {model, models, Schema} from "mongoose";

const PeerViedoReviewSchema = Schema({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User' }, 
    peerViedo: { type: Schema.Types.ObjectId, ref: 'PeerViedo' }, 
    rating: { type: Number }, 
    comment: { type: String}, 
    reviewTime: { type: Date, default: Date.now }
});

export const PeerViedoReview = models?.PeerViedoReview || model('PeerViedoReview', PeerViedoReviewSchema);