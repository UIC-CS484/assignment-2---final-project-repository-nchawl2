let leagueIDToName = (id) => {
  switch(id) {
    case "39":
      return "Premier League";
    case "140":
      return "LaLiga Santander";
    case "78":
      return "Bundesliga";
    case "135":
      return "Serie A";
    case "61":
      return "Ligue 1 UberEats";
    default: 
      return "Not recognized";
  }
}

module.exports = {leagueIDToName};