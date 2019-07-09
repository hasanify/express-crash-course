const express = require('express');
const path = require('path');
const app = express();
const members =  [
{
	id: 1,
	name: 'Hasan',
	email: 'hasanali.abps@gmail.com'
},
{
	id: 2,
	name: 'Hasan',
	email: 'hasanali.abps@gmail.com'
},
{
	id: 3,
	name: 'Hasan',
	email: 'hasanali.abps@gmail.com'
}];
app.get('', (req, res) => {
	// res.send('<h1>Hello world!</h1>');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/api/members', (req, res) => {
	// res.send('<h1>Hello world!</h1>');
	// res.sendFile(path.join(__dirname, 'public', 'index.html'));
	res.json(members);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));