import { City } from './City';
import { District } from './District';
import { Street } from './Street';
import { ZipCode } from './ZipCode';

interface IOfficeProps {
  district: string;
  city: string;
  street: string;
  zipCode: number;
}

export class Office {
  private constructor(
    public readonly district: District,
    public readonly city: City,
    public readonly street: Street,
    public readonly zipCode: ZipCode
  ) {
    Object.freeze(this);
  }

  static create(officeProps: IOfficeProps): Office {
    try {
      const district = District.create(officeProps.district);
      const city = City.create(officeProps.city);
      const street = Street.create(officeProps.street);
      const zipCode = ZipCode.create(officeProps.zipCode);
      return new Office(district, city, street, zipCode);
    } catch (error) {
      throw error;
    }
  }
}
