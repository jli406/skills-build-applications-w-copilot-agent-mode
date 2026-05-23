import connectDatabase from '../config/db';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import Workout from '../models/workout';
import Leaderboard from '../models/leaderboard';

async function main() {
  await connectDatabase();
  console.log('Seed the octofit_db database with test data');

  const existingUserCount = await User.countDocuments();
  if (existingUserCount > 0) {
    console.log('Existing data detected; seed script will not overwrite existing documents.');
    process.exit(0);
  }

  const users = await User.create([
    {
      name: 'Avery Chen',
      email: 'avery.chen@example.com',
      passwordHash: 'hashed-password-1',
      profile: { age: 28, location: 'Seattle, WA', bio: 'Runner and wellness coach.' }
    },
    {
      name: 'Jordan Patel',
      email: 'jordan.patel@example.com',
      passwordHash: 'hashed-password-2',
      profile: { age: 33, location: 'Austin, TX', bio: 'Enjoys team challenges and strength training.' }
    }
  ]);

  const teams = await Team.create([
    { name: 'Peak Performers', description: 'A team focused on endurance and consistency.', members: users.map((user) => user._id) }
  ]);

  await Activity.create([
    { user: users[0]._id, type: 'Running', durationMinutes: 45, distanceKm: 8.2, caloriesBurned: 520 },
    { user: users[1]._id, type: 'Cycling', durationMinutes: 60, distanceKm: 20, caloriesBurned: 700 }
  ]);

  await Workout.create([
    { title: 'Full Body Strength', description: 'A balanced strength routine for core and legs.', difficulty: 'Intermediate', durationMinutes: 50, recommendedFor: ['Strength', 'Endurance'] },
    { title: 'Morning Mobility Flow', description: 'A gentle mobility workout to loosen joints and start the day.', difficulty: 'Beginner', durationMinutes: 20, recommendedFor: ['Recovery', 'Warm-up'] }
  ]);

  await Leaderboard.create([
    { team: teams[0]._id, score: 1420, rank: 1 }
  ]);

  console.log('Test data inserted into octofit_db successfully.');
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
