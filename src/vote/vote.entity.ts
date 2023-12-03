import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  points: number;

  @ManyToOne(() => User, (user) => user.votes)
  user: User;

  @ManyToOne(() => Task, (task) => task.votes)
  task: Task;
}
