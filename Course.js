import mongoose from "mongoose"

const ModuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lessons: [
    {
      title: { type: String, required: true },
      content: String,
      videoUrl: String,
      duration: Number, // in minutes
      order: { type: Number, default: 0 },
    },
  ],
  order: { type: Number, default: 0 },
})

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  language: { type: String, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
  price: { type: Number, default: 0 },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  modules: [ModuleSchema],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  rating: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Course || mongoose.model("Course", CourseSchema)
