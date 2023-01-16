import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './assets/styles/main.sass';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
