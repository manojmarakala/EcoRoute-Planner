const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>EcoRoute Planner Backend – Running!</h1>');
});

app.post('/api/auth/login', (req, res) => {
  res.json({
    token: "demo-jwt-manoj-2025",
    user: { name: "Manoj Marakala" },
    message: "Login successful"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));