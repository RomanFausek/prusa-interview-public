import express from 'express';
import path from 'path';

const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

app.post('/api/submit-form', (req, res) => {
  const { textField, checkboxField, radioField } = req.body;

  // Delay the response by 2000 milliseconds (2 seconds)
  setTimeout(() => {
    if (
      typeof textField === 'string' &&
      textField.length >= 4 &&
      checkboxField === true &&
      radioField
    ) {
      res.send({ status: 'success', message: 'Form data is valid!' });
    } else {
      res.status(400).send({ status: 'error', message: 'Validation failed' });
    }
  }, 2000);
});

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
