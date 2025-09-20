import mongoose from "mongoose"

const LibrarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  language: { type: String, required: true },
  category: String,
  website: String,
  documentation: String,
  githubUrl: String,
  npmPackage: String,
  popularity: { type: Number, default: 0 },
  usedFor: [String],
  sampleCode: String,
  tutorials: [
    {
      title: String,
      url: String,
      difficulty: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Library || mongoose.model("Library", LibrarySchema)
