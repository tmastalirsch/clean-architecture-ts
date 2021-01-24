import { Office } from '../../../domain/office/Office';

export interface IOfficeRepository {
  findByDistrict(district: string): Promise<Office>;
  findByStreet(street: string): Promise<Office>;
  findByCity(city: string): Promise<Office>;
  findByZipCode(zipCode: number): Promise<Office>;
}
