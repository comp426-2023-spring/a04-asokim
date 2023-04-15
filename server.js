#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import {rps, rpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args["port"] || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
});

app.get('app/rps', (req, res) => {
    res.status(200).send(rps());
});