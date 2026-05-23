import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default model('Team', teamSchema);
