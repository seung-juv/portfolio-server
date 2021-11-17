import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../interfaces/users.interface';
import { File } from '#models/files/entities/files.entity';
import { UserType } from '#models/user-types/entities/user-types.entity';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ name: 'account_access_fail_count', type: 'numeric' })
  accountAccessFailCount: number;

  @ManyToOne(() => File, (file) => file.id)
  @JoinColumn({ name: 'profile', referencedColumnName: 'id' })
  profile: File;

  @ManyToOne(() => UserType, (userType) => userType.userType)
  @JoinColumn({ name: 'user_type', referencedColumnName: 'userType' })
  userType: UserType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
