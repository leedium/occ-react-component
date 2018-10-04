import React from 'react';
import {render} from 'react-dom';

import App from "./App";
import {componentName} from "../../webpack.config";


render(<App/>, document.getElementById('componentName'));
