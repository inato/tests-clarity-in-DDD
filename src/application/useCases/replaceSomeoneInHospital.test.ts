import { replaceSomeoneInHospital } from './replaceSomeoneInHospital';
import {Doctor} from "../../domain/Hospital/Doctor";
import {InMemoryHospitalRepository} from "../../domain/Hospital/HospitalRepository";
import {hospitalWithDoctorFactory} from "../../domain/Hospital/hospitalFactory";
import {doctorFactory} from "../../domain/Hospital/doctorFactory";

const setUpUseCase = async ({ initialDoctor }: { initialDoctor: Doctor }) => {
  const hospitalRepository = new InMemoryHospitalRepository();
  const hospital = hospitalWithDoctorFactory({ doctor: initialDoctor });
  await hospitalRepository.store(hospital);
  return {
    initialStaffSize: hospital.staffSize,
    simplifiedReplaceSomeoneInHospital: ({
      newDoctor,
    }: {
      newDoctor: Doctor;
    }) =>
      replaceSomeoneInHospital({
        initialDoctor,
        newDoctor,
        hospitalName: hospital.name,
        hospitalRepository,
      }),
  };
};

describe('replaceSomeoneInHospital', () => {
  it('should not modify the staff size of the hospital', async () => {
    const {
      initialStaffSize,
      simplifiedReplaceSomeoneInHospital,
    } = await setUpUseCase({
      initialDoctor: doctorFactory({ id: 1 }),
    });
    const updatedHospital = await simplifiedReplaceSomeoneInHospital({
      newDoctor: doctorFactory({ id: 2 }),
    });
    expect(updatedHospital!.staffSize).toEqual(initialStaffSize);
  });
});
