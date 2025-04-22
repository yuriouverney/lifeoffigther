import { Router } from 'express';
import auth from '../middlewares/auth.js';
import * as authCtrl from '../controllers/authController.js';
import * as userCtrl from '../controllers/userController.js';
import * as trainingCtrl from '../controllers/trainingController.js';
import * as fightCtrl from '../controllers/fightController.js';
import * as storeCtrl from '../controllers/storeController.js';
import * as missionCtrl from '../controllers/missionController.js';
import * as bankCtrl from '../controllers/bankController.js';
import * as loanCtrl from '../controllers/loanController.js';
import * as clanCtrl from '../controllers/clanController.js';
import * as rankingCtrl from '../controllers/rankingController.js';
import * as tournamentCtrl from '../controllers/tournamentController.js';

const router = Router();

// Public
router.post('/auth/register', authCtrl.register);
router.post('/auth/login',    authCtrl.login);

// Protected
router.get('/users/profile', auth, userCtrl.profile);

router.post('/trainings/start', auth, trainingCtrl.start);

router.post('/fights/start', auth, fightCtrl.startFight);

router.get('/store/items', auth, storeCtrl.list);
router.post('/store/buy', auth, storeCtrl.buy);

router.get('/missions', auth, missionCtrl.list);
router.post('/missions/accept', auth, missionCtrl.accept);
router.post('/missions/complete', auth, missionCtrl.complete);

router.get('/bank/balance', auth, bankCtrl.balance);
router.post('/bank/deposit', auth, bankCtrl.deposit);
router.post('/bank/withdraw', auth, bankCtrl.withdraw);

router.post('/loans/take', auth, loanCtrl.take);

router.post('/clans', auth, clanCtrl.createClan);

router.get('/ranking', auth, rankingCtrl.global);

router.get('/tournament/current', auth, tournamentCtrl.current);

export default router;
