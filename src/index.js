const messages = [
  "Jairo",
  "Ana",
  "Diego",
  "Julio",
  "Cesar",
  "Juan",
  "David",
  "Nicolas",
  "Laura",
  "Jessica",
  "Maria",
  "Martha",
  "Jorge",
  "Pedro",
  "Franklin"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg }