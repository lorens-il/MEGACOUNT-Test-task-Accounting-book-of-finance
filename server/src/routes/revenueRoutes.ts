import Router from 'express';
import revenueController from '../controllers/revenueController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
import validateRequest from '../middleware/validateRequest.js';
import { schemaDeleteValidateId, schemaUpdateValidateId } from '../schema/schemaValidateId.js';
import { schemaValidateBalance, schemaValidateWalletId } from '../schema/schemeValidateBalance.js';

const router = Router();

router.post(
    '/',
    checkRoleMiddleware('user'),
    validateRequest(schemaValidateWalletId),
    revenueController.addRevenue,
);
router.get(
    '/',
    checkRoleMiddleware('user'),
    validateRequest(schemaValidateBalance),
    revenueController.getAllRevenues,
);
router.put(
    '/',
    checkRoleMiddleware('user'),
    validateRequest(schemaUpdateValidateId),
    revenueController.updateRevenue,
);
router.delete(
    '/:id',
    checkRoleMiddleware('user'),
    validateRequest(schemaDeleteValidateId),
    revenueController.deleteRevenue,
);

export default router;
