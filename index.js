const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
console.log('test console')

app.listen(3000, () => console.log(`App is runnging on ${PORT}`));