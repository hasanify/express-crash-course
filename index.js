const express = require('express');
const app = express();
const members = require('./members/members_route.js');

app.use('/members', members);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));