import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, EditProductDto } from './dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const limit = 10;
    const skip = 0;
    const products = await this.productRepository
      .createQueryBuilder('product')
      .limit(limit)
      .skip(skip)
      .getMany();

    return products;
  }

  async findById(id: string): Promise<Product> {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if (!product) throw new NotFoundException('Product not found');

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

      if (!product) throw new NotFoundException('Product not found');

      await this.productRepository.remove(product);

      return { deleted: true };
    } catch (error) {
      throw error;
    }
  }
}
