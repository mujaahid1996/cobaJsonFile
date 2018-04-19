var fs = require('fs')

// read 
fs.readFile('./users.json' , 'utf-8' , 
    function (err, data) {
        // jika error
        if(err) throw err
        // jika berhasil
        var arrayOfObjects = JSON.parse( data )

        // write into memory
        arrayOfObjects.users .push({
            name: "User2 ",
            age: 20
        })
        
        console.log(arrayOfObjects) //OUTPUT = { users: [] }        
        
    }
)
