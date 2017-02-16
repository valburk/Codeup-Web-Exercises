(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("the sun")// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("pluto")// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
   planets.shift(0) // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.indexOf("earth");
    console.log('Using splice to remove the planet after "Earth".');
    planets.splice(3)// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    planets.splice(3, "mars")// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse();// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Sorting the planets array.");
    planets.sort();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
})();