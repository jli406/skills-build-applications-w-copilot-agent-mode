import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema({
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  score: { type: Number, required: true },
  rank: Number,
  updatedAt: { type: Date, default: Date.now }
});

export default model('Leaderboard', leaderboardSchema);
