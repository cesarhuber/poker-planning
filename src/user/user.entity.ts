import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Roles } from '../auth/auth.roles';
import { Room } from '../room/room.entity';
import { Vote } from '../vote/vote.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ default: Roles.USER })
  role: Roles;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @ManyToOne(() => Room, (room) => room.users)
  room: Room;

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];
}
