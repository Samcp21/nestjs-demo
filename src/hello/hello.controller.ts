import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello World',
    });
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query() query: { name: string; age: number }) {
    console.log(typeof query.age);
    console.log(typeof query.name);

    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
