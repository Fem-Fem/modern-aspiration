# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

goal1 = Goal.create(aim:"Become a Software Engineer", category: "Professional Development", strategy: "Learn to Code")
goal2 = Goal.create(aim:"Get Fit", category: "Health", strategy: "Eat Healthier, pick up cycling")

objective1 = Objective.create(description: "Finish Curriculum", goal_id: 1, completed: 0)
objective2 = Objective.create(description: "Build 5 Projects", goal_id: 1, completed: 0)
objective3 = Objective.create(description: "Build Portfolio", goal_id: 1, completed: 0)

objective4 = Objective.create(description: "Invite Alex to go biking once a week", goal_id: 2, completed: 0)
objective5 = Objective.create(description: "Kickbox 3x weekly", goal_id: 2, completed: 0)
