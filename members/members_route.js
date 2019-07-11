const members = require('../members/members_list.js');
const express = require('express');
const router = express.Router();
const path = require('path');


// members home page
router.get('/', function (req, res){
	// res.sendFile(__dirname, 'members', 'index.html');
	res.sendFile(path.join(__dirname, '', 'index.html'));
});

// all members route
router.get('/all', function (req, res) {
  res.json(members);
});

// member by id
router.get('/:id', function (req, res) {
  current = members.filter(member => member.id == req.params.id);
  if(current != '')
  res.json(current);
  else
  res.send(`User with id <b>${req.params.id}</b> not found.`)
});

// member by name
router.get('/u/:name', function (req, res) {
  current = members.filter(member => member.name.toLowerCase() == req.params.name.toLowerCase());
  if(current != '')
  res.json(current);
  else
  res.send(`User with name <b>${req.params.name}</b> not found.`)
});

module.exports = router;