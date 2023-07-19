import { Order } from '../models/order';

class OrdersService {

  constructor(
    private readonly model = Order,
  ) {
    
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.model.findAll();
    return orders;
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.model.findOne({ where: { id: id } });
    if(!order?.getDataValue) throw new Error(`Order not found by id ${id}`);
    return order;
  }

  async create(data: Omit<Order, 'id'>): Promise<Order> {
    try {
      const createdOrder = await this.model.create(data);
      return createdOrder;
    } catch(error) {
      console.error(error);
      throw new Error("Failed to create order");
    }
  }

  async update(id: number, data: Omit<Order, 'id'>): Promise<Order> {
    const [affectedRows, rows] = await this.model.update(data, { where: { id: id }, returning: true });
    if(affectedRows === 0) throw new Error(`No update was performed for order #${id} or it doesnt exists.`);
    return rows[0];
  }

  async delete(id: number): Promise<boolean> {
    const deleteCount = await this.model.destroy({ where: { id: id } });
    return !!deleteCount;
  }
}

const ordersService = new OrdersService();
export default ordersService;