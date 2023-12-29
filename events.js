const EventsEmitter = require('events');
const event = new EventsEmitter();

event.on("saymyname", () => {
    console.log("Your name is Abhay");
});

event.emit("saymyname");