import {model, models, Schema} from "mongoose";

const ContestSchema = Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    problems: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Problem' 
    }],
})

export const Contest = models?.Contest || model('Contest', ContestSchema);