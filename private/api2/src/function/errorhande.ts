export class UserNotExistError extends Error {
    constructor(msg?: string) {
      super(msg);
      Object.setPrototypeOf(this, UserNotExistError.prototype);
    }
  }

  export class UserPasswordMissMatchError extends Error {
    constructor(msg?: string) {
      super(msg); 
      Object.setPrototypeOf(this, UserPasswordMissMatchError.prototype);
    }
  }