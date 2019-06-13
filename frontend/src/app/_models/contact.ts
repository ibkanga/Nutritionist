export class Contact {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private message: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.message = message;
    }
}
