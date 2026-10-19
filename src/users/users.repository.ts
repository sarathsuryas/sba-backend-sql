import { Inject, Injectable } from '@nestjs/common';
import pg from 'pg';
import { PG_POOL } from '../database/database.constants.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersRepository {
  constructor(@Inject(PG_POOL) private readonly pool: pg.Pool) { }

  async findByEmail(email: string): Promise<any> {
    const { rows } = await this.pool.query(
      'SELECT u.id,u.email,u.password_hash,r.name AS role FROM portal_users u LEFT JOIN roles r ON u.role_id  = r.id WHERE u.email = $1',
      [email]
    );
    return rows[0];
  }
  async create(dto: CreateUserDto) {
  }

}
