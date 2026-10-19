import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) { }
    async create(dto:CreateUserDto) {
        return this.usersRepository.create(dto);
    }
    async findAll() {
        return this.usersRepository.findAll();
    }
}
