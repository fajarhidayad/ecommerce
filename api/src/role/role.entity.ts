import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleName } from './role.enum';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'enum', enum: RoleName, default: RoleName.USER })
  name: RoleName;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
