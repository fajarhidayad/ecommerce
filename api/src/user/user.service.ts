import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from 'src/auth/dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: { role: true } });
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
        relations: { role: true },
      });

      if (!user) throw new NotFoundException('User not found');

      return user;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({ email });

      if (!user) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(user: SignUpDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(user);
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const user = await this.findById(id);

      return await this.userRepository.remove(user);
    } catch (error) {
      throw error;
    }
  }
}
