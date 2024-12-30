import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Type(() => Date) 
  @IsDate()
  @IsNotEmpty()
  enrollmentDate: Date;
}