
// const fs = require('fs/promises');
const fs = require('fs');

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/lis', (req, res) => {
    console.log(res)
    let fileContent = fs.readFileSync("list.json");
    let file = JSON.parse(fileContent);
    // Отправляем ответ
    res.json(file);

    // res.json([{
    //     "name": "Audi"
    // }, {
    //     "name": "Nissan"
    // }, {
    //     "name": "Жигули"
    // }, {
    //     "name": "Kia"
    // }, {
    //     "name": "Hov"
    // }])
    // res.sendFile(`${__dirname}/public/index.html`);
});
app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});