import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: Number,
  caloriesBurned: Number,
  recordedAt: { type: Date, default: Date.now }
});

export default model('Activity', activitySchema);
