import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserResponseDto } from './dto/user-response.dto.js';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create a portal user' })
    @ApiCreatedResponse({ type: UserResponseDto })
    async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiCreatedResponse({ type: UserResponseDto })
    async findAll(): Promise<UserResponseDto[]> {
        return this.usersService.findAll();
    }

}
