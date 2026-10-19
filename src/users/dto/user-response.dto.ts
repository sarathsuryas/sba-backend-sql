import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 8 })
  id: number;

  @ApiProperty({ example: 'staff@sba.local' })
  email: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: '2026-10-19T09:00:00.000Z' })
  created_at: Date;
}
