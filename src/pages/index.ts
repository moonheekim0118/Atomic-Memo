import { lazy } from 'react';

export const Home = lazy(() => import('./Home'));
export const HomeId = lazy(() => import('./Home/id'));
export const Trash = lazy(() => import('./Trash'));
export const TrashId = lazy(() => import('./Trash/id'));
export const Write = lazy(() => import('./Write'));
export const Update = lazy(() => import('./Update'));
