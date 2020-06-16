const express = require('express');
const path = require('path');
const { Client } = require('pg');

const app = express();

const PG_URL = process.env.PG_URL || 'postgres://localhost:5432/';

const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.use(express.static(__dirname));

app.use(express.json())