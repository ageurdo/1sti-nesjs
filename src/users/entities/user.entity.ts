import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum RecordStatus {
  ACTIVE = 'ACTIVE',
  REMOVED = 'REMOVED',
}
@Entity('users')
@Unique(['cpf'])
export class User {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column({
    type: 'varchar',
    default: Role.USER,
  })
  role: Role;

  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column({
    type: 'varchar',
    default: RecordStatus.ACTIVE,
  })
  status: RecordStatus;

  @Column()
  @CreateDateColumn()
  createdAt?: Date;

  @Column({ default: 'system' })
  createdBy?: string;

  @Column()
  @UpdateDateColumn()
  updatedAt?: Date;

  @Column()
  @Column({ default: 'system' })
  updatedBy?: string;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true })
  deletedBy: string;
}
