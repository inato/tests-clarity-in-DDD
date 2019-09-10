import { Doctor } from './Doctor';

export interface HospitalConstructorArgs {
  name: string;
  country: string;
  director: Doctor;
  staff: ReadonlyArray<Doctor>;
}

export class Hospital {
  readonly name: string;

  readonly country: string;

  readonly director: Doctor;

  staff: ReadonlyArray<Doctor>;

  constructor(props: HospitalConstructorArgs) {
    this.name = props.name;
    this.country = props.country;
    if (
      props.staff.find(employee => employee.id === props.director.id) ===
      undefined
    ) {
      throw new Error(
        'Cannot create Hospital, the director should always be in the staff.',
      );
    }
    this.director = props.director;
    this.staff = props.staff;
  }

  public hire(doctor: Doctor): string {
    if (this.staff.find(employee => employee.id === doctor.id) !== undefined) {
      return 'This doctor is already an employee of the hospital';
    }
    this.staff = [...this.staff, doctor];
    return 'The doctor was successfully hired';
  }

  public fire(doctor: Doctor) {
    this.staff = this.staff.filter(doc => doc.id !== doctor.id);
  }

  get staffSize() {
    return this.staff.length;
  }
}
