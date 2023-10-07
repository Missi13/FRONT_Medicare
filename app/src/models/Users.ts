import Genders from '@/utils/EnumGenders';

export class User{
	private id: string;
    private firstName: string;
	private lastName: string;
	private phoneNumber: string;
	private email: string;
	private password: string;
	private dateOfBirth: Date;
	private gender: Genders;
    
    constructor(user: any) {
		this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNumber = user.phoneNumber;
        this.email = user.email;
        this.password = user.password;
        this.dateOfBirth = user.dateOfBirth;
        this.gender = user.gender;
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

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		this.email = email;
	}

	public getPassword(): string {
		return this.password;
	}

	public setPassword(password: string): void {
		this.password = password;
	}

	public getDateOfBirth(): Date {
		return this.dateOfBirth;
	}

	public SetDateOfBirth(dateOfBirth: Date): void {
		this.dateOfBirth = dateOfBirth;
	}

	public getGender(): Genders {
		return this.gender;
	}

	public setGender(gender: Genders): void {
		this.gender = gender;
    }

}