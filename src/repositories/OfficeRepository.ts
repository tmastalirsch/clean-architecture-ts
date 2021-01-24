import { Office } from '../domain/office/Office';
import { BaseRepository } from './base/BaseRepository';
import { IOfficeRepository } from './interfaces/office/IOfficeRepository';

export class OfficeRepository
  extends BaseRepository<Office>
  implements IOfficeRepository {
  findByDistrict(_district: string): Promise<Office> {
    throw new Error('Method not implemented.');
  }
  findByStreet(_street: string): Promise<Office> {
    throw new Error('Method not implemented.');
  }
  findByCity(_city: string): Promise<Office> {
    throw new Error('Method not implemented.');
  }
  findByZipCode(_zipCode: number): Promise<Office> {
    throw new Error('Method not implemented.');
  }
}
