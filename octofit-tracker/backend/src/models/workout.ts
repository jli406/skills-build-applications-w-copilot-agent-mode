import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  durationMinutes: Number,
  recommendedFor: [String],
  createdAt: { type: Date, default: Date.now }
});

export default model('Workout', workoutSchema);
