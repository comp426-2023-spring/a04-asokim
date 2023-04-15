#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import {rps, rpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args["port"] || 5000;
