import { RouterProvider } from 'react-router';
import { router } from '../routes/index.ts';

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};