const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});