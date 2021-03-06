import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/createDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/createDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
);

routes.post('/client/', createClientController.handle);
routes.post('/client/', createDeliverymanController.handle);

routes.post('/delivery', createDeliveryController.handle);
export { routes };
