import { TypeDocument } from './../../type-document/entities/type-document.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class TypeDocumentSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const typeDocumentRepository = dataSource.getRepository(TypeDocument);

    const count = await typeDocumentRepository.count();

    if (count > 0) {
      console.log('Document Types table already has data, skipping seed');
      return;
    }

    const typeDocuments = [
      { NameTypeDocument: 'DNI' },
      { NameTypeDocument: 'PASSPORT' },
    ];

    await typeDocumentRepository.insert(typeDocuments);

    console.log(`Seeded ${typeDocuments.length} document types`);
  }
}
