import {
  Global,
  Inject,
  Logger,
  Module,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import pg from 'pg';
import { PG_POOL } from './database.constants.js';

@Global()
@Module({
  providers: [
    {
      provide: PG_POOL,
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        new pg.Pool({
          connectionString: config.getOrThrow<string>('DATABASE_URL'),
          max: Number(config.get('DB_POOL_MAX') ?? 10),
        }),
    },
  ],
  exports: [PG_POOL],
})
export class DatabaseModule implements OnModuleInit, OnApplicationShutdown {
  private readonly logger = new Logger(DatabaseModule.name);

  constructor(@Inject(PG_POOL) private readonly pool: pg.Pool) {}

  async onModuleInit() {
    // Fail fast at startup if the database is unreachable.
    await this.pool.query('SELECT 1');
    this.logger.log('Connected to PostgreSQL');
  }

  async onApplicationShutdown() {
    await this.pool.end();
  }
}
