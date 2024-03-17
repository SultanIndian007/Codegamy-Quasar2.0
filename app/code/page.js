// App.js
'use client'
import React from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import Room from './Room';
import SocketWrapper from './SocketWraper';
import Link from 'next/link';
import ErrorBoundary from './ErrorBounday'; // Import ErrorBoundary component

const router = createBrowserRouter([
  {
    path: '/code',
    element: <JoinRoom />,
  },
  {
    path: '/room/:roomId',
    element: <SocketWrapper><Room /></SocketWrapper>,
  },
]);

function App() {
  return (
    // <ErrorBoundary> {/* Wrap the RouterProvider with ErrorBoundary */}
        <RouterProvider router={router} />
    // </ErrorBoundary>
  );
}

export default App;
