import {model, models, Schema} from "mongoose";

const CourseSchema = Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    modules: [
      {
        title: {
          type: String,
          required: true,
        },
        sections: [
          {
            title: {
              type: String,
              required: true,
            },
            content: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  });
  
export const Course = models?.Course || model('Course', CourseSchema);