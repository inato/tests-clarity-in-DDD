export interface DoctorConstructorArgs {
  id: number;
  firstName: string;
  lastName: string;
}

export class Doctor {
  // in real DDD example, id would be an opaque id with business logic
  readonly id: number;

  readonly firstName: string;

  readonly lastName: string;

  constructor(props: DoctorConstructorArgs) {
    this.id = props.id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
  }
}
