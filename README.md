EXERCISE #1

CONTEXT
PSh-Game is an online game with thousands of participants abroad the world. In this instance we
require to generate statistics for matches between players and a web report with the best
players.

A.
Simulate statistics of the games between players inserting randomly into a mysql database,
statistics of the player’s games between 0 and 10 players with the following information:
● Unique identifier on the stat.
● Unique identifier of the player.
● Nickname (random) (*)
● Profile Image (random) (*)
● Creation date in timestamp.
● Score (random from 1 to 100).
Configure a cron job that does this operation every 5 minutes.
(*) To generate random nicknames and profile images of the players use the following API:
● https://randomuser.me/api
B.
Generate a web report that shows top 10 best scores of the players of the whole history and also
show the last time stats were generated.
C.
Adapt the report to automatically refresh stats every 10 seconds, without refreshing the web
page.
D.
Add a button to allow exporting the report to CSV.

NOTES
Developers can choose the technology that best suits his/her skills.