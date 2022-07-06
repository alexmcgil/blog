import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('register')
    async register(@Body() dto: RegDto) {

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        
    }
}
