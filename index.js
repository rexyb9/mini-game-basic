function pickOption(option) {
    const playerName = "Player";
    const botName = "Arbot";
    const botOption = botBrain();
    let winner = "";
  
    function botBrain() {
      const options = ["🖐", "✌", "✊"];
      const bot = options[~~(Math.random() * options.length)];
      return bot;
    }
  
    function winCalculation(botOption, playerOption) {
      if (botOption == "🖐" && playerOption == "✌") {
        winner = playerName;
      } else if (botOption == "🖐" && playerOption == "✊") {
        winner = botName;
      } else if (botOption == "✌" && playerOption == "🖐") {
        winner = botName;
      } else if (botOption == "✌" && playerOption == "✊") {
        winner = playerName;
      } else if (botOption == "✊" && playerOption == "🖐") {
        winner = playerName;
      } else if (botOption == "✊" && playerOption == "✌") {
        winner = botName;
      } else {
        winner = "SERI";
      }
    }
  
    function matchResult() {
      return winner !== "SERI"
        ? `${winner} MENANG!`
        : `WAAA ${winner}, GAK ADA YG MENANG 🤪`;
    }
  
    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
  
    inGame.textContent = "...";
    result.textContent = "...";
  
    setTimeout(() => {
      inGame.textContent = `${option} VS ${botOption}`;
      winCalculation(botOption, option);
      result.textContent = matchResult();
    }, 1500);
  }
  