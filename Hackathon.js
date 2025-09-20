import mongoose from "mongoose"

const HackathonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  theme: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: String,
  isVirtual: { type: Boolean, default: true },
  maxParticipants: Number,
  registrationDeadline: Date,
  prizes: [
    {
      position: String,
      reward: String,
      amount: Number,
    },
  ],
  requirements: [String],
  schedule: [
    {
      time: String,
      event: String,
      description: String,
    },
  ],
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: String, enum: ["upcoming", "ongoing", "completed"], default: "upcoming" },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Hackathon || mongoose.model("Hackathon", HackathonSchema)
