import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private task = [];

  getTask(id: number) {
    const taskFound = this.task.find((x) => x.id == id);
    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return { codeResponse: '01', data: taskFound };
  }
  getTasks() {
    return { codeResponse: '01', data: this.task };
  }
  createTask(task: CreateTaskDto) {
    this.task.push({ ...task, id: this.task.length + 1 });
    return { codeReponse: '01', data: task };
  }

  updateTasks() {
    return 'actualizando tareas';
  }
  deleteTasks() {
    return 'Eliminando Tarea';
  }

  updateTasksStatus() {
    return 'actualizando el estado de una tarea';
  }
}
