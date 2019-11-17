#!/bin/bash
# Please refer to https://www.valentinog.com/blog/babel/ for further setup
mkdir -p src
npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom
npm i prop-types --save-dev
npm i html-webpack-plugin html-loader --save-dev
npm i webpack-dev-server --save-dev
