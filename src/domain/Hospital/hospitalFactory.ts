import { doctorFactory } from './doctorFactory';
import { Hospital, HospitalConstructorArgs } from './Hospital';
import { Doctor } from './Doctor';

export const hospitalFactory = ({
  name = 'Hospital',
  country = 'France',
  director = doctorFactory(),
  staff = [director],
}: Partial<HospitalConstructorArgs> = {}): Hospital =>
  new Hospital({
    name,
    country,
    director,
    staff,
  });

export const hospitalWithDoctorFactory = ({
  doctor = doctorFactory(),
}: Partial<{ doctor: Doctor | null }> = {}) => {
  // The naive logic around doctor's id here is just to make sure that
  // the director's id will not easily collide with future doctors ids.
  const director = doctorFactory({ id: (doctor ? doctor.id : 1) + 100 });
  return hospitalFactory({
    staff: doctor ? [director, doctor] : [director],
    director,
  });
};
