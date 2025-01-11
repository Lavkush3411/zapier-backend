import { IsNotEmpty } from 'class-validator';

export class ZapCreateParamDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  zapId: string;
}
