interface user {
    firstname : string;
    lastname : string;
    age : number;
}


function isLegal(user : user){
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

