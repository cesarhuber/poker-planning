import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column({ name: 'time_limit', default: null })
  timeLimit: number;

  @Column({ name: 'rounding_suggestion', default: null })
  roundingSuggestion: RoundingSuggestion;

  @Column({ name: 'is_active' })
  isActive: boolean;

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

  @OneToMany(() => User, (user) => user.room)
  users: User[];

  @OneToMany(() => Task, (task) => task.room)
  tasks: Task[];
}

export enum RoundingSuggestion {
  UP = 'up',
  AVG = 'average',
  MED = 'median',
}
