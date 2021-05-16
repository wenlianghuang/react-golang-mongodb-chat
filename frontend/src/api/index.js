var socket = new WebSocket('ws://localhost:8080/ws');

let connect = (cb) => {
    console.log("Attempting Connection...")

    socket.onopen = () => {
        console.log("Successfully Connected")
    }

    socket.onmessage = msg => {
        console.log(msg)
        const {data} = msg
        const test = JSON.parse(data)
        console.log("test: ",test)
        //cb(msg)
        cb(test)
    }

    socket.onclose = (event) => {
        console.log("Socket Closed Connection: ",event)

    }
}

let sendMsg = (msg) => {
    console.log("sending msg: ", msg)
    socket.send(msg);
}

let clearMessage = () =>{
    sendMsg("clear")
}

export {connect,sendMsg,clearMessage}