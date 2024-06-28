const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Import and use routes here
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Finance Control App API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
