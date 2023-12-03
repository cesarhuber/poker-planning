// task.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Room } from '../room/room.entity';
import { Vote } from '../vote/vote.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Room, (room) => room.tasks)
  room: Room;

  @OneToMany(() => Vote, (vote) => vote.task)
  votes: Vote[];
}
