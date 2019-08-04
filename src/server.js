import express from 'express';

// Up server
const app = express();



// Settings
app.set('port', 3000);



// Routes
app.get('/', (req, res) => {
  res.send('hola');
});


export default app;
