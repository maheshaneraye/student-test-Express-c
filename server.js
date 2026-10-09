const app = require('./app');

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Student Test Express C running on http://${HOST}:${PORT}`);
});
