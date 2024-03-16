import {model, models, Schema} from "mongoose";

const PeerViedoSchema = Schema({
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }, // Reference the PeerViedo question
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    videoUrl: { type: String, required: true },
    submissionTime: { type: Date, default: Date.now },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PeerViedoReview' }],
});

export const PeerViedo = models?.PeerViedo || model('PeerViedo', PeerViedoSchema);
