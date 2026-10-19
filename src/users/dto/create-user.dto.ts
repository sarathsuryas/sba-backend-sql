import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'staff@sba.local' })
  email: string;

  @ApiProperty({ example: 'Staff@123', format: 'password', minLength: 8 })
  password: string;

  @ApiProperty({ example: 2, description: 'id from the roles table' })
  role_id: number;
}
