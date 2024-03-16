setTimeout(() => console.log("Hello, World!"), 1000);
// Hello, World! (after 1 second)
// that doesn't block the main thread

const timerId = setTimeout(() => console.log("No!"), 1000);
clearTimeout(timerId);
// here, the timer is cleared before it can run

setInterval(() => console.log("Hey!"), 1000);
// Hey! (every second)

const intervalId = setInterval(() => console.log("Nope"), 1000);
clearInterval(intervalId);