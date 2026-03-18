import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users = [];

  async create(user: any) {
    const hashed = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashed, id: Date.now() };
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }
}
