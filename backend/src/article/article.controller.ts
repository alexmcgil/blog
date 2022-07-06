import { Controller } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    
    @Post('create')
    async create(@Body() dto: Omit<ArticleModel, 'id'>){

    }

    @Get(':id')
    async get(@Param('id') id: string){
        
    }

    @Patch(':id')
    async update(@Param('id') id: string, dto: ArticleModel){

    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        
    }

}