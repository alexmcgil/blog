import { Controller } from '@nestjs/common';

@Controller('comment')
export class CommentController {

    @Post('create')
    async create(@Body() dto: CommentModel){

    }

    @Get(':title')
    async get(@Param('title') title: string){
        
    }

    @Patch(':id')
    async update(@Param('id') id: string, dto: CommentModel){

    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        
    }
}
