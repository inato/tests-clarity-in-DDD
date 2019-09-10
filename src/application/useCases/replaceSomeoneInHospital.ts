import {Doctor} from "../../domain/Hospital/Doctor";
import {HospitalRepository} from "../../domain/Hospital/HospitalRepository";
import {Hospital} from "../../domain/Hospital/Hospital";

export const replaceSomeoneInHospital = async ({
  initialDoctor,
  newDoctor,
  hospitalName,
  hospitalRepository,
}: {
  initialDoctor: Doctor;
  newDoctor: Doctor;
  hospitalName: string;
  hospitalRepository: HospitalRepository;
}): Promise<Hospital | null> => {
  const hospital = await hospitalRepository.findByName(hospitalName);
  if (!hospital) {
    return null;
  }
  hospital.fire(initialDoctor);
  hospital.hire(newDoctor);
  await hospitalRepository.store(hospital);
  return hospital;
};
