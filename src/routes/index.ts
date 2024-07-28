import { Router } from 'express';
import * as Stats from './statRoutes';
import { server } from '../bootstrap'

const router = Router();

router.get('/top', Stats.getTopScores);

server.use('/api', router);
