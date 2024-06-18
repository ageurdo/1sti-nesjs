import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { describe } from 'node:test';
import { ResponseUserDto } from './dto/user-response.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { Repository } from 'typeorm';
import { CpfUniqueViolationException } from 'src/exceptions';
import { NotFoundError } from 'rxjs';

const userToBeCreate: CreateUserDto = {
  cpf: '08163899930',
  password: '12345678',
  name: 'Marcelo Rafael Lucca Baptista',
  dateOfBirth: Date.apply('1990-02-12T03:00:00.000Z'),
  street: 'Rua das Flores',
  number: '123',
  complement: 'Apto 101',
  neighborhood: 'Centro',
  city: 'São Paulo',
  state: 'SP',
  zipCode: '01310-000',
};

const userEntityList: ResponseUserDto[] = [
  {
    id: '1',
    cpf: '08163899930',
    name: 'Marcelo Rafael Lucca Baptista',
    dateOfBirth: Date.apply('1990-02-12T03:00:00.000Z'),
    street: 'Rua das Flores',
    number: '123',
    complement: 'Apto 101',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01310-000',
  },
  {
    id: '2',
    cpf: '07450156970',
    name: 'Cauã João Marcos Monteiro',
    dateOfBirth: Date.apply('1991-03-04T17:30:00.000Z'),
    street: 'Rua 13 de Junho',
    number: '321',
    complement: 'Apto 45',
    neighborhood: 'Centro',
    city: 'Foz do Iguaçu',
    state: 'PR',
    zipCode: '85.861-430',
  },
];

describe('UsersService', () => {
  let userService: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findAll: jest.fn().mockResolvedValue(userEntityList),
            findOne: jest.fn().mockResolvedValue(userToBeCreate[0]),
            create: jest.fn().mockReturnValue(userToBeCreate),
            save: jest.fn().mockResolvedValue(userEntityList[0]),
            update: jest.fn().mockResolvedValue(userEntityList[0]),
            updatePassword: jest.fn().mockResolvedValue(null),
            softDeleteUser: jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('FindAll', () => {
    it('should return a user list entity successfully', async () => {
      //Arrange
      const expected = [];
      //Act
      const result = await userService.findAll();
      //Assert
      expect(result).toEqual(expected);
      expect(userRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', async () => {
      //Arrange
      jest.spyOn(userRepository, 'find').mockRejectedValueOnce(new Error());
      //Act and Assert
      await expect(userService.findAll()).rejects.toThrow(Error);
    });
  });

  describe('Create', () => {
    it('should create a new user entity succesfully', async () => {
      //Arrange
      const expected = userEntityList[0];
      //Act
      const result = await userService.create(userToBeCreate);
      //Assert
      expect(result).toEqual(expected);
      expect(userRepository.create).toHaveBeenCalledTimes(2);
      expect(userRepository.save).toHaveBeenCalledTimes(3);
    });

    it('should throw an error when a user with the same CPF already exists', () => {
      // Arrange
      jest
        .spyOn(userRepository, 'findOneOrFail')
        .mockRejectedValueOnce(new CpfUniqueViolationException());

      // Act and Assert
      expect(userService.create(userToBeCreate)).rejects.toThrow(Error);
    });
  });

  describe('findOne', () => {
    it('should return a user entity successfully', async () => {
      //Arrange
      const expected = userEntityList[0];
      //Act
      const result = await userService.findOne('1');
      //Assert
      expect(result).toEqual(expected);
      expect(userRepository.findOneOrFail).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      //Arrange
      jest
        .spyOn(userRepository, 'findOneOrFail')
        .mockRejectedValueOnce(new Error());
      //Act and Assert
      expect(userService.findOne('-1')).rejects.toThrow(NotFoundError);
    });
  });
});

// it('/ (GET)', () => {
//   return request(app.getHttpServer())
//     .get('/')
//     .expect(200)
//     .expect('Hello World!');
// });
