import { RoundingSuggestion } from '@/src/room/room.entity';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class SignedRoomDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  timeLimit: number;

  @IsEnum(RoundingSuggestion)
  roundingSuggestion: RoundingSuggestion;
}
