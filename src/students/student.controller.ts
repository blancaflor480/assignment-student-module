import { Controller, Patch, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';


@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

}
