import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum Role {
  ADMIN,
  USER,
}

enum RecordStatus {
  ACTIVE,
  REMOVED,
}

@Entity()
export class User {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column({ default: Role.USER })
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

  @Column({ default: RecordStatus.ACTIVE })
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
  @Column({ nullable: true })
  updatedBy?: string;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true })
  deletedBy: string;
}
