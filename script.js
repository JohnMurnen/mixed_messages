const teamArray = ['Boston Celtics', 'Brooklyn Nets', 'New York Knicks', 'Philadelphia 76ers', 'Toronto Raptors', 'Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Milwaukee Bucks', 'Atlanta Hawks', 'Charlotte Hornets', 'Miami Heat', 'Orlando Magic', 'Washington Wizards', 'Denver Nuggets', 'Minnesota Timberwolves', 'Oklahoma City Thunder', 'Portland Trail Blazers', 'Utah Jazz', 'Golden State Warriors', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Phoenix Suns', 'Sacramento Kings', 'Dallas Mavericks', 'Houston Rockets', 'Memphis Grizzlies', 'New Orleans Pelicans', 'San Antonio Spurs'];
const positionArray = ['point guard', 'shooting guard', 'small forward', 'power forward', 'center'];
const statArray = ['points', 'rebounds', 'assits', 'blocks', 'steals'];

let team = teamArray[Math.floor(Math.random() * teamArray.length)];
let position = positionArray[Math.floor(Math.random() * positionArray.length)];
let stat = statArray[Math.floor(Math.random() * statArray.length)];

console.log(`You’re on the ${team}.
You play ${position}.
Your best stat is ${stat}.`);