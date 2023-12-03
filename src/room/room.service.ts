import { Injectable } from '@nestjs/common';
import { RoomRepository } from './room.repository';
import { RoomDTO } from '../app/dtos/room.dto';
import { SignedRoomDTO } from '../app/dtos/signedRoom.dto';
import { Room } from './room.entity';
import { randomBytes } from 'crypto';

@Injectable()
export class RoomService {
  constructor(private roomRepository: RoomRepository) {}

  public async createRoom(roomInfo: RoomDTO): Promise<Room> {
    const linkBuffer = randomBytes(4);
    const link = linkBuffer.toString('hex');
    const room = {
      ...roomInfo,
      link,
    };
    return this.roomRepository.createRoom(room);
  }

  public async createSignedRoom(roomInfo: SignedRoomDTO): Promise<Room> {
    const linkBuffer = randomBytes(4);
    const link = linkBuffer.toString('hex');
    const room = {
      ...roomInfo,
      link,
    };
    return this.roomRepository.createRoom(room);
  }

  public async deleteRoom(roomId: number): Promise<void> {
    await this.roomRepository.deleteRoom(roomId);
  }
}
