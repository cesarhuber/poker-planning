import { Body, Controller, Delete, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { RoomDTO } from '../app/dtos/room.dto';
import { RoomService } from './room.service';
import { AuthGuard } from '../auth/auth.guard';
import { SignedRoomDTO } from '../app/dtos/signedRoom.dto';
import { Room } from './room.entity';
import { Response } from 'express';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  public async createRoom(@Body() roomInfo: RoomDTO): Promise<Room> {
    return this.roomService.createRoom(roomInfo);
  }

  @Post('signed')
  @UseGuards(AuthGuard)
  public async createSignedRoom(@Body() roomInfo: SignedRoomDTO): Promise<Room> {
    return this.roomService.createSignedRoom(roomInfo);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  public async deleteRoom(@Param('id') id: number, @Res() res: Response): Promise<void> {
    await this.roomService.deleteRoom(id);
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
