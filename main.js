var fs = require('fs')

// read 
fs.readFile('./users.json' , 'utf-8' , 
    function (err, data) {
        // jika error
        if(err) throw err
        // jika berhasil
        var arrayOfObjects = JSON.parse( data )

        // WRITE data into users.json 
        // write into memory
        arrayOfObjects.users .push({
            name: "User2 ",
            age: 20
        })
        // write into file
        fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 
        function (err) {
            if(err) throw err
            console.log('Done!');
            
        })

        console.log(arrayOfObjects) //OUTPUT = { users: [] }        
        
    }
)