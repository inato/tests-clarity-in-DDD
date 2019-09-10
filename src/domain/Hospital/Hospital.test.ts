import { hospitalWithDoctorFactory } from './hospitalFactory';
import { doctorFactory } from './doctorFactory';

describe('Hospital', () => {
  describe('hire', () => {
    it('should raise the staff size by 1', () => {
      const hospital = hospitalWithDoctorFactory({ doctor: null });
      const initialStaffSize = hospital.staffSize;
      hospital.hire(doctorFactory({ id: 1 }));
      expect(hospital.staffSize).toEqual(initialStaffSize + 1);
    });
    it('should not raise the staff size by 1 if the doctor is already employed', () => {
      const doctor = doctorFactory();
      const hospital = hospitalWithDoctorFactory({ doctor });
      const initialStaffSize = hospital.staffSize;
      hospital.hire(doctor);
      expect(hospital.staffSize).toEqual(initialStaffSize);
    });
  });
});
