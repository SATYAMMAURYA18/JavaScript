function revealDestiny() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (!name || isNaN(day) || isNaN(month)) {
    alert("The stars are clouded... please enter your name and birth date!");
    return;
  }

//   console.log(name,surname,day,month,year);

  //zodiac sign
  //based on months.
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  //compliments based on dates
  const compliments = [
    "You have a great sense of humor.",
    "You are incredibly thoughtful.",
    "Your positivity is infectious.",
    "You have an amazing smile.",
    "You are so creative.",
    "You are really talented.",
    "You make people feel comfortable.",
    "Your energy is contagious.",
    "You have a brilliant mind.",
    "You are a great listener.",
    "You are so kind-hearted.",
    "You inspire others around you.",
    "You have excellent taste.",
    "You are very dependable.",
    "Your ideas are always insightful.",
    "You make a difference in people's lives.",
    "You are very patient.",
    "You are exceptionally hardworking.",
    "Your optimism is refreshing.",
    "You handle challenges well.",
    "You have a unique perspective.",
    "You are very generous.",
    "Your confidence is admirable.",
    "You are a natural leader.",
    "You have a warm personality.",
    "You are incredibly empathetic.",
    "You bring out the best in others.",
    "Your dedication is inspiring.",
    "You are always thoughtful.",
    "You have a wonderful sense of style.",
    "You light up any room you enter.",
  ];
  //victim card size 20
  const victimCardPhrases = [
    "You always do good for others, but they never appreciate it.",
    "You always try to help, but people just take advantage.",
    "You always forgive, but they keep hurting you.",
    "You always give your best, but it’s never enough.",
    "You always listen to everyone, but no one listens to you.",
    "You always stay calm, but everyone blames you.",
    "You always work hard, but someone else gets the credit.",
    "You always smile, but inside you feel ignored.",
    "You always care, but people don’t notice.",
    "You always speak the truth, but they twist your words.",
    "You always try to be fair, but they think you’re weak.",
    "You always stay strong, but no one supports you.",
    "You always share your time, but they take it for granted.",
    "You always try to understand, but they misunderstand you.",
    "You always try to be kind, but they treat you badly.",
    "You always give advice, but no one follows it.",
    "You always make sacrifices, but they never recognize them.",
    "You always help in need, but people forget it quickly.",
    "You always stay loyal, but they betray your trust.",
    "You always put others first, but no one puts you first.",
  ];
  //recomendation size 30
  const recommendations = [
    "Try taking a short walk to clear your mind.",
    "Consider making a list of your priorities.",
    "You could try reading a new book this week.",
    "Spend a few minutes meditating each day.",
    "Try reaching out to a friend you haven’t talked to in a while.",
    "Consider learning a new skill online.",
    "You might want to declutter your workspace.",
    "Try cooking a new recipe today.",
    "Consider setting small achievable goals for yourself.",
    "You could take a break and listen to your favorite music.",
    "Try writing down your thoughts in a journal.",
    "Consider practicing gratitude daily.",
    "You might want to start a new hobby.",
    "Try organizing your schedule for the week.",
    "Consider joining a local club or community group.",
    "You could spend time in nature this weekend.",
    "Try limiting your screen time before bed.",
    "Consider learning a few words in a new language.",
    "You might want to compliment someone today.",
    "Try volunteering for a cause you care about.",
    "Consider taking a digital detox for a day.",
    "You could experiment with a new workout routine.",
    "Try reaching out to someone you admire for advice.",
    "Consider exploring a new part of your city.",
    "You might want to practice mindfulness exercises.",
    "Try writing down three things you’re proud of each day.",
    "Consider taking up a creative project.",
    "You could try listening to a podcast on a new topic.",
    "Try making a small positive change in your daily routine.",
    "Consider reflecting on what makes you happiest.",
  ];
  //future prediction
  const futurePredictions = [
    "A new opportunity will soon present itself.",
    "You may find clarity in a confusing situation.",
    "Someone important will reach out to you unexpectedly.",
    "A change in your routine will bring positive results.",
    "You will discover a hidden talent soon.",
    "An exciting journey is on the horizon.",
    "A financial opportunity may come your way.",
    "You will meet someone who inspires you.",
    "A challenge will teach you an important lesson.",
    "Your patience will soon pay off.",
    "Unexpected news will change your perspective.",
    "A decision you make will impact your future greatly.",
    "You will reconnect with someone from your past.",
    "Your creativity will lead to recognition.",
    "A small act of kindness will return to you tenfold.",
    "You may face a choice that requires courage.",
    "A long-awaited answer will finally arrive.",
    "You will gain insight into a personal relationship.",
    "A chance encounter will lead to an important connection.",
    "Your efforts will soon bear fruit in an unexpected way.",
  ];

  const compliment_message=compliments[day-1];
  const victim_complement=victimCardPhrases[Math.floor(Math.random()*20)];
  const Length=name.length*surname.length*year;
  const recomendation_message=recommendations[Length%30];
  const reco_index=day*month*year;
  const prediction_message=futurePredictions[reco_index%20];
    
  // Update UI
  document.getElementById("userName").innerText =
    `Hello, ${name} ${surname}`;
    document.getElementById("zodiacSign").innerText=zodiacSigns[month-1];
    document.getElementById("horoscope").innerHTML=`${compliment_message}\n${victim_complement}\n${recomendation_message}\n${prediction_message}`;
    document.getElementById("result").classList.remove("hidden");

}
