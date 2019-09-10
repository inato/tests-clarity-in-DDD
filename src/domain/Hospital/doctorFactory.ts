import { Doctor, DoctorConstructorArgs } from './Doctor';

export const doctorFactory = ({
  id = 1,
  firstName = 'John',
  lastName = 'Doe',
}: Partial<DoctorConstructorArgs> = {}): Doctor =>
  new Doctor({
    id,
    firstName,
    lastName,
  });
