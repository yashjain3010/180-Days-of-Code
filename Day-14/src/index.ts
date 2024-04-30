interface User {
    name : string,
    age : number,
    id : string,
    password : string,
    email : string,
}

type UpdateProps = Pick<User, 'name' | 'age' | 'password' >

function updateUser(updateprop : UpdateProps){
    
}

