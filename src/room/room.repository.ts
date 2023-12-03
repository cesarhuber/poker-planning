import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { Repository } from 'typeorm';
import { RoomDTO } from '../app/dtos/room.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SignedRoomDTO } from '../app/dtos/signedRoom.dto';

@Injectable()
export class RoomRepository {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  public async createRoom(roomInfo: RoomDTO): Promise<Room> {
    return this.roomRepository.save(roomInfo);
  }

  public async createSignedRoom(roomInfo: SignedRoomDTO): Promise<Room> {
    return this.roomRepository.save(roomInfo);
  }

  public async deleteRoom(roomId: number): Promise<void> {
    const room = await this.roomRepository.findOne({ where: { id: roomId } });
    if (!room) throw new NotFoundException('Room ID not found');
    await this.roomRepository.delete(roomId);
  }
}
