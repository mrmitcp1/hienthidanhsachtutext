const http = require('http')
const fs = require('fs')
let server = http.createServer(function (req, res) {
    let dataFile = '';
    let html = '';
    fs.readFile('./data/data.txt','utf-8',function (err,str) {
        dataFile=str.split(',')
        dataFile.forEach((value, index)=>{
            html+= '<tr>';
            html+=`<td>${index+1}</td>`
            html+=`<td>${value}</td>`
            html+=`<td><button class="btn btn-danger">Detele</button></td>`
            html+= '</tr>'
        })
    })
    fs.readFile('./templates/index.html','utf-8',function (err, data){
        data=data.replace('{list-user}',html)
        res.write(data);
        res.end()
    })
})
server.listen(3000,function () {
    console.log('server running')
})