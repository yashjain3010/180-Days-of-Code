const bcrypt = require('bcrypt')

const plainpassword = 'djfj';

bcrypt.hash(plainpassword,10,(err,hash) => {
    if(err) throw error;
    console.log('Hashed Password',hash);

    bcrypt.compare('djfj',hash,(err,result) => {
        if (err) throw error;
        console.log("Password matched", result);
    })

})