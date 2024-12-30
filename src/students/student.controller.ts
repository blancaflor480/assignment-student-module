import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.OK) 
  async remove(@Param('id') id: string) {
    return await this.studentService.remove(+id);
  }
}
