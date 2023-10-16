import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  total: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cartItems: CartItem[];

  @ManyToOne(() => User, (user) => user.carts)
  user: User;
}
