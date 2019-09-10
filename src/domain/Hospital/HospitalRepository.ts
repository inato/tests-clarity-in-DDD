import { Hospital } from './Hospital';

export interface HospitalRepository {
  findByName: (name: string) => Promise<Hospital | undefined>;
  store: (hospital: Hospital) => Promise<void>;
}

export class InMemoryHospitalRepository implements HospitalRepository {
  private readonly storage: Record<string, Hospital>;

  constructor() {
    this.storage = {};
  }

  findByName(name: string): Promise<Hospital | undefined> {
    return Promise.resolve(this.storage[name]);
  }

  store(hospital: Hospital): Promise<void> {
    this.storage[hospital.name] = hospital;
    return Promise.resolve();
  }
}
