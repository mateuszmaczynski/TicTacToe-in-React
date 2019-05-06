import React from "react";
import { render } from "react-dom";
import App from "./App";
import './index.css';

let root = document.createElement('div');
document.body.appendChild(root);

render(
    <div>
        <App/>
    </div>,
    root
);

