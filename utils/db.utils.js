const fs = require('fs');
module.exports.readData=()=>{
    return new Promise ((resolve, reject) =>{
        fs.readFile ('./db/db.student.json','utf-8',(err,data)=>{
            if (err) reject(err) 
            else resolve(JSON.parse(data))
        });
    });
};

module.exports.writeData = ({data}) =>{
    return new Promise ((resolve, reject) =>{
        fs.writeFile('./db/db.student.json',JSON.stringify(data),(err)=>{
            if (err) reject(err)
            else resolve('success')
        })
    })
}
