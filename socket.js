let io;


module.exports ={
    init: htttpServer=>{
        io = require('socket.io')(htttpServer, {
            cors: {
                origin: '*',
              }
        })
        return io
    },
    getIo:()=>{
        if(!io){
            throw new Error('Socket.io not found')
        }

        return io
    }
}