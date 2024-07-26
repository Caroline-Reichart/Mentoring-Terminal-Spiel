import readlinesync from "readline-sync";

const name = readlinesync.question("Wie heißt du? ");
let points = 10;

console.log(
  `Hallo ${name}, du befindest dich auf einer magischen Wiese.\nVor dir siehst du drei Gegenstände: eine Tür, eine Schatztruhe und einen Schrank.\nHinter einem der Gegenstände wartet ein Schatz auf dich.\nAber Vorsicht! Hinter den anderen beiden Gegenständen lauern möglicherweise Gefahren.\nDu hast 10 Punkte. Viel Glück!\n`
);

let answer; 

while (true){
    answer = readlinesync.question(`Vor dir siehst du drei Gegenstände: eine Tür, eine Schatztruhe und einen Schrank.\nWelchen Gegenstand möchtest du öffnen? 
      1. Tür 
      2. Schatztruhe 
      3. Schrank\n`);

    if (answer === "1" || answer === "2" || answer === "3") {
        break;       
    }  
} 

if (answer === "1") {
  console.log("Du öffnest die Tür und siehst einen Weg! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log(
    `Du öffnest die Schatztruhe, das Monster klaut dir 5 Punkte!\n`
  );
  points -= 5;
} else if (answer === "3") {
  console.log(
    `Du öffnest den Schrank und findest einen Schatz, du gewinnst 10 Punkte!\n`
  );
  points += 10;
}

while (true){
  answer = readlinesync.question(`Möchtest du die Tür öffnen?\n
    1. Ja\n
    2. Nein\n `);

  if (answer === "1" || answer === "2") {
      break;       
  }  
} 

if (answer === "1") {
console.log("Du gehst durch die Tür! Du gewinnst 2 Punkte.\n");
points += 2;
} else if (answer === "2") {
console.log(
  `Du hast die Tür nicht geöffnet, das Spiel ist beendet! Du hast ${points} Punkte erreicht!\n`
);
process.exit();
} 

while (true){
  answer = readlinesync.question(`Der Weg führt dich an einen magischen See.\n
   1. Möchtest du mit dem Boot zur Insel fahren?\n
   2. Möchtest du am See entlang gehen?\n
   3. Möchtest du dich an den See setzen und die Ruhe genießen?\n `);

  if (answer === "1" || answer === "2" || answer === "3") {
      break;       
  }  
} 

if (answer === "1") {
  console.log("Du fährst mit dem Boot zur Insel! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log("Du gehst am See entlang! Du verlierst 2 Punkte.\n");
  points -= 2;
} else if (answer === "3") {
    console.log("Du setzt dich an den See und genießt die Ruhe! \n");
}

switch (parseInt(answer)) {
  case 1:
    console.log(
      `Auf der Insel findest du eine Schatztruhe! Du gewinnst 5 Punkte. Ich hoffe die Reise hat dir Spaß gemacht, du hast ${points} Punkte erreicht!\n`
    );
    process.exit();
    break;
  case 2:
    console.log(
      `Du gehst am See entlang und findest ein verlassenenes Haus! Du gewinnst 5 Punkte. Ich hoffe die Reise hat dir Spaß gemacht, du hast ${points} Punkte erreicht!\n`
    );
    process.exit();
    break;
  case 3:
    console.log(
      "Plötzlich taucht vor dir im Wasser eine Nixe auf. Du gewinnst 5 Punkte.\n"
    );
    break;
}

while (true){
  answer = readlinesync.question(`Möchtest du die Nixe ansprechen?\n
    1. Ja\n
    2. Nein\n`);
    
  if (answer === "1" || answer === "2") {
      break;       
  }  
} 

if (answer === "1") {
  console.log("Die Nixe erzählt dir eine Geschichte! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log("Du hast die Nixe nicht angesprochen, das Spiel ist beendet!\n");
  process.exit();
} 

while (true){
  answer = readlinesync.question("Die Nixe bietet dir 3 Muscheln an, jede Muschel enthält ein Geschenk. Welche wählst du?\n1. die blaue Muschel \n2. die grüne Muschel\n3. die lila Muschel\n");
  if (answer === "1" || answer === "2" || answer === "3") {
      break;       
  }  
}

if (answer === "1") {
  console.log("In der blauen Muschel ist ein Diamant! Du gewinnst 5 Punkte.\n");
  points += 5;
} else if (answer === "2") {
  console.log("In der grünen Muschel ist ein Smaragd! Du gewinnst 5 Punkte.\n");
  points += 5;
}else if (answer === "3") {
  console.log("In der lila Muschel ist eine Perle! Du gewinnst 5 Punkte.\n");
  points += 5;
}

while (true){
  answer = readlinesync.question("Während du mit der Nixe am Strand sitzt, zieht über dir ein Regenbogen auf, möchtest du ihm folgen?\n1. Ja\n2. Nein\n");
  if (answer === "1" || answer === "2") {
      break;       
  }
}

if (answer === "1") {
  console.log("Du folgst dem Regenbogen! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log(`Du bist dem Regenbogen nicht gefolgt, das Spiel ist beendet, du hast ${points} Punkte erreicht!\n`);
  process.exit();
}

while (true){
  answer = readlinesync.question("Der Regenbogen führt dich zu einem Schloss, möchtest du hineingehen oder dir den Garten ansehen?\n1. hineingehen\n2. Garten ansehen\n");
  if (answer === "1" || answer === "2") {
      break;
  }
}

if (answer === "1") {
  console.log("Du gehst ins Schloss! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log(`Du siehst dir den Garten an und findest dabei ein altes Labyrinth, das Spiel geht weiter in Teil 3 (Reise ins Labyrinth)! Du hast ${points} Punkte erreicht!\n`);
  process.exit();
}

while (true){
  answer = readlinesync.question("Im Schloss siehst du eine Treppe, die nach oben führt. Du gehst hinauf und findest eine Tür.\n1. Möchtest du die Tür öffnen?\n2. Möchtest du die Treppe wieder hinunter gehen?\n");
  if (answer === "1" || answer === "2") {
      break;
  }
}

if (answer === "1") {
  console.log("Du öffnest die Tür! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log("Du gehst die Treppe wieder hinunter! Du verlierst 2 Punkte.\n");
  points -= 2;
}

while (true){
  answer = readlinesync.question("Hinter der Tür findest du ein wunderschönes Zimmer. In dem Zimmer steht ein großer Spiegel, möchtest du hineinsehen?\n1. Ja\n2. Nein\n");
  if (answer === "1" || answer === "2") {
      break;
  }
}

if (answer === "1") {
  console.log("Du siehst in den Spiegel! Du gewinnst 2 Punkte.\n");
  points += 2;
} else if (answer === "2") {
  console.log(`Du hast nicht in den Spiegel gesehen, das Spiel ist beendet du hast ${points} Punkte erreicht!\n`);
  process.exit();
}

while (true){
  answer = readlinesync.question("Im Spiegel siehst du eine andere Welt, möchtest du hindurchgehen?\n1. Ja\n2. Nein\n");
  if (answer === "1" || answer === "2") {
      break;
  }
}

if (answer === "1") {
  console.log("Du gehst hindurch! Du gewinnst 2 Punkte.\n");
  points += 2;
}
else if (answer === "2") {
  console.log(`Du bist nicht hindurchgegangen, das Spiel ist beendet, du hast ${points} Punkte erreicht!\n`);
  process.exit();
}

console.log(`Ich hoffe die Reise hat dir Spaß gemacht, die Reise in die Welt hinter dem Spiegel startet im nächsten Teil (Die Welt im Spiegel), du hast ${points} Punkte erreicht!`);



