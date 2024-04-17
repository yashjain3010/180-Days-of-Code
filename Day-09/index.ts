interface Todo{
    title : string,
    description : string,
    id : number,
    done : boolean
}

type UpdateTodoInput = Partial<Todo>

function swap<T,U>(a : T,b : U) : [U,T] {
    return [b,a];
}

let ans = swap(1,"3")
console.log(ans);