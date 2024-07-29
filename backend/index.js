import express from 'express';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    const status = {
        "Status": "Running"
    };

    res.send(status);
})


app.listen(process.env.PORT || 5002, () => {
    console.log("Running server..");
});