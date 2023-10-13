import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CartItem } from './cart/cart-item.entity';
import { Cart } from './cart/cart.entity';
import { OrderItem } from './order/order-item.entity';
import { Order } from './order/order.entity';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { Role } from './role/role.entity';
import { RoleName } from './role/role.enum';
import { RoleModule } from './role/role.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'store',
      entities: [Product, User, Role, Cart, CartItem, Order, OrderItem],
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
    RoleModule,
    ProductModule,
    UserModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(
    private configService: ConfigService,
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  async onModuleInit() {
    const superadmin = await this.dataSource.manager.findOneBy(User, {
      email: 'superadmin@mail.com',
    });
    const roles = await this.dataSource.manager.find(Role);

    if (!roles.length) {
      const allRole: { name: RoleName }[] = [];
      for (const role in RoleName) {
        allRole.push(
          this.dataSource.manager.create(Role, { name: RoleName[role] }),
        );
      }
      await this.dataSource.manager.save(allRole);
    }

    if (!superadmin) {
      const password = await this.authService.hashData(
        this.configService.get<string>('SUPERADMIN_PASSWORD'),
      );
      const newUser = this.dataSource.manager.create(User, {
        email: this.configService.get<string>('SUPERADMIN_MAIL'),
        password,
        firstname: this.configService.get<string>('SUPERADMIN_FIRSTNAME'),
        lastname: this.configService.get<string>('SUPERADMIN_LASTNAME'),
        role: { id: 1 },
      });

      await this.dataSource.manager.save(newUser);
    }
  }
}
