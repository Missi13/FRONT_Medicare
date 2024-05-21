export class LoginUser{
	private username: string;
	private password: string;
	private rememberMe: boolean;
    
    constructor(loginUser: any) {
		this.username = loginUser.login;
        this.password = loginUser.password;
		this.rememberMe = loginUser.rememberMe
    }

	public getRememberMe(): boolean {
		return this.rememberMe;
	}

	public setRememberMe(rememberMe: boolean): void {
		this.rememberMe = rememberMe;
	}

	public getLogin(): string {
		return this.username;
	}

	public setLogin(login: string): void {
		this.username = login;
	}

	public getPassword(): string {
		return this.password;
	}

	public setPassword(password: string): void {
		this.password = password;
	}

}