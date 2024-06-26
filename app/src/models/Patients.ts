import Genders from '@/utils/EnumGenders';

export class Patient{
	private id: string;
    private firstName: string;
	private lastName: string;
	private phoneNumber: string;
	private gender: Genders;
	private dateOfBirth: Date;
	private email: string;
	private createdBy: string;
	private createdDate: Date;
	private lastModifiedBy: string;
	private lastModifiedDate: Date;
    
    constructor(patient: Patient) {
		this.id = patient.id;
        this.firstName = patient.firstName;
        this.lastName = patient.lastName;
        this.phoneNumber = patient.phoneNumber;
        this.gender = patient.gender;
        this.dateOfBirth = patient.dateOfBirth;
		this.email = patient.email;
		this.createdBy = patient.createdBy;
		this.createdDate = patient.createdDate;
		this.lastModifiedBy = patient.lastModifiedBy;
		this.lastModifiedDate = patient.lastModifiedDate;
    }

	public getId(): string {
		return this.id;
	}

	public setId(id: string): void {
		this.id = id;
	}

    public getFirstName(): string {
		return this.firstName;
	}

	public setFirstName(firstName: string): void {
		this.firstName = firstName;
	}

	public getLastName(): string {
		return this.lastName;
	}

	public setLastName(lastName: string): void {
		this.lastName = lastName;
	}
	
	public getPhoneNumber(): string {
		return this.phoneNumber;
	}

	public setPhoneNumber(phoneNumber: string): void {
		this.phoneNumber = phoneNumber;
	}

	public getgender(): Genders {
		return this.gender;
	}

	public Setgender(gender: Genders): void {
		this.gender = gender;
	}

	public getDateOfBirth(): Date {
		return this.dateOfBirth;
	}

	public SetDateOfBirth(dateOfBirth: Date): void {
		this.dateOfBirth = dateOfBirth;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		this.email = email;
	}

	public getCreatedBy(): string {
		return this.createdBy;
	}

	public setCreatedBy(createdBy: string): void {
		this.createdBy = createdBy;
	}

	public getCreatedDate(): Date {
		return this.createdDate;
	}

	public setCreatedDate(createdDate: Date): void {
		this.createdDate = createdDate;
	}

	public getLastModifiedBy(): string {
		return this.lastModifiedBy;
	}

	public setLastModifiedBy(lastModifiedBy: string): void {
		this.lastModifiedBy = lastModifiedBy;
	}

	public getLastModifiedDate(): Date {
		return this.lastModifiedDate;
	}

	public setLastModifiedDate(lastModifiedDate: Date): void {
		this.lastModifiedDate = lastModifiedDate;
	}

}