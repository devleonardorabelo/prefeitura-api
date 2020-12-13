import { Router } from 'express';
import PageControllers from '../controllers/PageControllers';
import PostControllers from '../controllers/PostControllers';

const routes = Router();

routes.get('/pages', PageControllers.index);
routes.get('/posts', PostControllers.index);

export default routes;
