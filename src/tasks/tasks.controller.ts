import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getTasks(@Param() params: any) {
    const { id } = params;
    return this.tasksService.getTask(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create a task' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }
  @Put()
  updateTasks() {
    return this.tasksService.updateTasks();
  }
  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTasks();
  }
}
