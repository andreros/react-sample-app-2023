import './sass/_index.scss';

import React from 'react';

import { AppRouter } from './routes/AppRouter';

export const App: React.FC = () => (
    <div className="rsa-application-scope">
        <AppRouter />
    </div>
);
