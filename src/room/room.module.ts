import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { RoomService } from './room.service';
import { RoomRepository } from './room.repository';
import { RoomController } from './room.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService, RoomRepository],
  controllers: [RoomController],
})
export class RoomModule {}
