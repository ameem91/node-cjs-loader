#!/usr/bin/env node
"use strict";

const program = require("commander");
const Loader = require("./src/loader");
const ModuleHelper = require("./src/moduleHelper");
const PathHelper = require("./src/pathHelper");

function load(path) {
  const cache = new Map();
  const loader = new Loader(ModuleHelper, PathHelper, cache);
  loader.getOutput(path, null);
}

program.parse(process.argv);
load(program.args[0]);
