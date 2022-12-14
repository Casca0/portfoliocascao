
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/app';

const react = () => {
	const container = document.getElementById('root');
	const root = createRoot(container);

	root.render(<App />);
};

export default react;
