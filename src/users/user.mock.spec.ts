import { UsersService } from './users.service';

export const userToCreate = {
  cpf: '07450156970',
  password: '12345678',
  name: 'Cauã João Marcos Monteiro',
  dateOfBirth: new Date('1991-03-04T14:30:00'),
  street: 'Rua 13 de Junho',
  number: '321',
  complement: 'Apto 45',
  neighborhood: 'Centro',
  city: 'Foz do Iguaçu',
  state: 'PR',
  zipCode: '85.861-430',
};

export const userMock = {
  id: '1',
  cpf: '07450156970',
  password: '12345678',
  name: 'Cauã João Marcos Monteiro',
  dateOfBirth: new Date('1991-03-04T14:30:00'),
  street: 'Rua 13 de Junho',
  number: '321',
  complement: 'Apto 45',
  neighborhood: 'Centro',
  city: 'Foz do Iguaçu',
  state: 'PR',
  zipCode: '85.861-430',
};

export const reqUserMock = {
  user: { id: 1, cpf: '07450156970', name: 'Cauã João Marcos Monteiro' },
};

export const passwordMock = {
  currentPassword: '12345678',
  newPassword: '12345677',
  confirmPassword: '12345677',
};
