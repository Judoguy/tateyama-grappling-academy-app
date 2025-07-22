const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // For parsing application/json

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // In a real application, you would save this to a database,
  // send an email, or process it further.

  res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});