import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, EditProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: string): Promise<Product> {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if (!product) throw new ForbiddenException('Product not found');

      return product;
    } catch (error) {
      throw error;
    }
  }

  async create(dto: CreateProductDto): Promise<Product> {
    try {
      const product = this.productRepository.create({
        ...dto,
      });

      await this.productRepository.save(product);

      return product;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, dto: EditProductDto) {
    try {
      const product = await this.findById(id);

      const updated = await this.productRepository.update(product.id, {
        ...dto,
      });

      return updated;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if (!product) throw new ForbiddenException('Product not found');

      await this.productRepository.remove(product);

      return { deleted: true };
    } catch (error) {
      throw error;
    }
  }
}
