// Dependencies
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Routers
import AppRoutes from './routes';

// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(<BrowserRouter>
		<AppRoutes/>
	   </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
