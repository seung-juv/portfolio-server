import { Expose } from 'class-transformer';
import { IWork } from '../interfaces/works.interface';
import { ModelEntity } from '#common/serializers/model.serializer';
import { File } from '#models/files/entities/files.entity';
import { User } from '#models/users/entities/users.entity';
import { Platform } from '#models/platforms/entities/platforms.entity';
import { Tool } from '#models/tools/entities/tools.entity';

export const defaultWorkGroupsForSerializing: string[] = [];

export class WorkEntity extends ModelEntity implements IWork {
  id: string;
  user: User;
  platform: Platform;
  title: string;
  description: string;
  meta: string;
  thumbnail: File;
  github: string;
  page: string;
  tools: Tool[];
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  @Expose({ groups: ['tool.timestamps'] })
  createdAt: Date;
  @Expose({ groups: ['tool.timestamps'] })
  updatedAt: Date;
}
