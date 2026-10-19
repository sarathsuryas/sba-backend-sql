import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository.js';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService
    ) {
    }
    async login(user: any) {
        const existingUser = await this.usersRepository.findByEmail(user.email);
        if (!existingUser) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password_hash);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const payload = { id: existingUser.id, email: existingUser.email, role: existingUser.role };
        const token = this.jwtService.sign(payload);
        return { token };
    }
}
