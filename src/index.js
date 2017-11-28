import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import 'animate.css/animate.css'
import 'jquery/dist/jquery.min.js'

sessionStorage.setItem('page', 'home')
render(<Root />, document.getElementById('root'));
registerServiceWorker();
