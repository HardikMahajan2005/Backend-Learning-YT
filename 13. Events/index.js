import EventEmitter from 'events'

// Creating the Instance
 const customEmitter = new EventEmitter()

//  1. on:listen/register for an event
// 2. Omce listen/register foran event.
// 3. emit:emit/call an event

// customEmitter.on('response',(name,id)=>{
//     console.log(`user: ${name} id: ${id}`)
// })

customEmitter.once('response',(name,id)=>{
    console.log(`user: ${name} id: ${id}`)
})
customEmitter.emit('response',"huxn",19);
customEmitter.emit('response',"john",29);
customEmitter.emit('response',"alex",10);
