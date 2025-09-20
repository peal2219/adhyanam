import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin", "instructor"], default: "user" },
  photo: String,
  enrolledCourses: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      enrolledAt: { type: Date, default: Date.now },
      progress: [
        {
          moduleId: mongoose.Schema.Types.ObjectId,
          lessonId: mongoose.Schema.Types.ObjectId,
          completedAt: { type: Date, default: Date.now },
        },
      ],
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || mongoose.model("User", UserSchema)
