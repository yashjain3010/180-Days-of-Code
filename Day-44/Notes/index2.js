async function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'Hello,Async/await';
            resolve(data);
        },1000)
    })
}

async function fetchDataandPrint(){
    try{
        const result = await fetchData();
        console.log(result);
    }
    catch(error){
        console.error(error)
    }
}

fetchDataandPrint();