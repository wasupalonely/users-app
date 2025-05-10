import 'dotenv/config';
import { DataSource } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { CountrySeed } from './country.seed';
import { TypeDocumentSeed } from './type-document.seed';

async function seed() {
  const options: SeederOptions = {
    seeds: [CountrySeed, TypeDocumentSeed],
    factories: [],
  };

  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'mydb',
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: false,
  });
  await dataSource.initialize();

  try {
    await runSeeders(dataSource, options);
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await dataSource.destroy();
  }
}

seed();
