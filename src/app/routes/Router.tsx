import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layout/index.ts";
import MoviePage from "../../pages/movies/MoviePage.tsx";
import HomePage from "../../pages/home/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'movies',
                element: <MoviePage />
            }
        ]
    },

]);