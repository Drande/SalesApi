import { Request, Response, Router } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import ordersService from '../services/orders.service';
import { StatusCodes } from 'http-status-codes';


// Init shared
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const orders = await ordersService.findAll();
    return res.status(StatusCodes.OK).json(orders);
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const order = await ordersService.findOne(+id);
    return res.status(StatusCodes.OK).json(order);
});

router.post('/', async (req: Request, res: Response) => {
    const orderData = req.body;
    console.log(orderData);
    if (!orderData) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Missing parameters",
        });
    }
    const order = await ordersService.create(orderData);
    return res.status(StatusCodes.CREATED).json(order);
});

router.put('/:id', async (req: Request, res: Response) => {
    const orderData = req.body;
    const { id } = req.params;
    if (!orderData) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Missing parameters",
        });
    }
    const updatedOrder = await ordersService.update(+id, orderData);
    return res.status(StatusCodes.OK).json(updatedOrder);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    const deleteResult = await ordersService.delete(Number(id));
    if(deleteResult) {
        return res.status(StatusCodes.OK).json(deleteResult).end();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
});

export default router;
