const express = require('express'); 
const cors = require('cors');
const app = express();
app.use(cors());

require('./routes/web')(app); 
require('./routes/web1')(app);

app.get('/api/test', (req,res) => {
    res.send('abc'); 
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
 console.log(`Example app listening on port: ${port}`);
});