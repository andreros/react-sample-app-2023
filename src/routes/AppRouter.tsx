import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '@/pages/LoadingPage/LoadingPage';

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={`/my-route`}
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <div>React Sample Application (my-route)</div>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path="*"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <div>React Sample Application</div>
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
