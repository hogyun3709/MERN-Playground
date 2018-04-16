const express = require('express');
require('./auth/passport-google');
const app = express();
require('./routes/auth')(app);

app.listen(5000);
