import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateZapDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  triggerTypeId: string;

  @IsNotEmpty()
  @IsUUID()
  triggerSubTypeId: string;
}
