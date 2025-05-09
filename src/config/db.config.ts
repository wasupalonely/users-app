import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from './config.interface';

export default registerAs('config', (): { database: DatabaseConfig } => ({
  database: {
    name: process.env.DB_NAME!,
    port: parseInt(process.env.DB_PORT!, 10),
    host: process.env.DB_HOST!,
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
  },
}));
