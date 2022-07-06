import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [AuthModule, BlogModule, CommentModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
