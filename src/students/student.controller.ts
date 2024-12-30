import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';


@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }
}
