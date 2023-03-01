const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin:'*'
}))

app.post('/login',(req,res)=>{

    console.log('有请求');

    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }

    
});
app.use((req, res) => {
    res.status(404).send('Not Found');
  });

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });