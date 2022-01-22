import App from './App.vue';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import routes from '~pages';
import { ViteSSG } from 'vite-ssg';

export const createApp = ViteSSG(
  App,
  { routes },
);
