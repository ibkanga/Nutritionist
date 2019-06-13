export class User {
  constructor(
    private id: number,
    private firstname: string,
    private lastname: string,
    private email: string,
    private username: string,
    private password: string,
    private token: string) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.username = username;
      this.password = password;
      this.token = token;
    }

    get Username() {
      return this.username;
    }

    get Password() {
      return this.password;
    }

    get Token() {
      return this.token;
    }
}
