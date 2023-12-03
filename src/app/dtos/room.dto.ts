import { IsNotEmpty } from 'class-validator';

export class RoomDTO {
  @IsNotEmpty()
  name: string;
}
