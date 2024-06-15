const fs = require('fs');

const filename = ["a.txt","b.txt","c.txt"]

function readFilefromArray(filename){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          fs.promises.readFile(filename, "utf-8")
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        }, 5000);
    })
}

const promises = filename.map((filename) => {
    return readFilefromArray(filename);
})

Promise.all(promises)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error)
  })

