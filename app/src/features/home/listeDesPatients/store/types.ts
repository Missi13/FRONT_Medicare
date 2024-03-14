import { Patient } from "@/models/Patients";

export interface PatientState {
    patients: [Patient] | null,
}
export enum PATIENT_STORE {
    SET_PATIENTS = "SET_PATIENTS"
}