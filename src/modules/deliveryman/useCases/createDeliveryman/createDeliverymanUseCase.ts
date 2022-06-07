import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanAlreadyExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanAlreadyExists) {
      throw new Error('Deliveryman already exists');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
