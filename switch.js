// Opdracht 1: schrijf een switch statement die vergelijkt op de variabele errorCode en de bijbehorende error message in de console logt.
// errorcode is altijd een cijfer tussen de 0 en de 4 en heeft respectievelijk de volgende betekenis:
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"
// Verwachtte uitkomsten:
// errorCode = 0 geeft "Geen watertoevoer"
// errorCode = 4 geeft "Geen druk"


// Opdracht 2: schrijf de volgende functie met if-statements om naar een functie met een switch statement.

function monitorHeartrate(color) {
  if (color === "green") {
    return "Hartslag stabiel"
  }

  if (color === "yellow") {
    return "Hartslag verhoogd"
  }

  if (color === "red" || color === "orange") {
    return "Kritieke hartslag, actie vereist!"
  }

  return "Status hartslag onbekend";
}

const heartrateState = monitorHeartrate("red");
console.log(heartrateState); // geeft "Kritieke hartslag, actie vereist!"

// BONUS! Opdracht 3: schrijf een functie calculate die de parameters a, b en operator verwacht. Parameters a en b zijn altijd cijfers.
// Als de string 'add' als operator wordt meegegeven, telt de functie a en b bij elkaar op en geeft dat terug
// Als de string 'subtract' als operator wordt meegegeven, trekt de functie a en b van elkaar af en geeft dat terug
// Als de string 'multiply' als operator wordt meegegeven, vermenigvuldigd de functie a en b met elkaar en geeft dat terug
// Als de string 'divide' als operator wordt meegegeven, deelt de functie a door b en geeft dat terug
// Verwachtte uitkomsten:
// calculate(3, 4, 'add') geeft 7
// calculate(5, 7, 'subtract') geeft -2
// calculate(25, 5, 'divide') geeft 5



