// built-in-module

const { EventEmitter } = require("events")

const event = new EventEmitter()

event.on("hello",()=>{
    console.log("Please share you insta_id")
})

event.emit("hello")