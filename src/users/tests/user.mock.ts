import { RecordStatus, Role } from '../entities/user.entity';

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
  role: Role.ADMIN,
  status: RecordStatus.ACTIVE,
  deletedBy: null,
};

export const userMock = {
  id: 1,
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
  role: Role.ADMIN,
  status: RecordStatus.ACTIVE,
  deletedBy: null,
};
export const userListMock = [
  {
    id: 1,
    cpf: '07450156970',
    password: '12345678',
    name: 'Alana Raquel Alves',
    dateOfBirth: new Date('1974-07-06T00:00:00'),
    street: 'Alameda das Cajaraneiras',
    number: '899',
    complement: '',
    neighborhood: 'Presidente Costa e Silva',
    city: 'Mossoró',
    state: 'RN',
    zipCode: '59625-350',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 2,
    cpf: '06241998005',
    password: '12345678',
    name: 'Gael Enzo Aragão',
    dateOfBirth: new Date('1972-05-02T00:00:00'),
    street: 'Rua Princesa',
    number: '992',
    complement: '',
    neighborhood: 'Cidade da Esperança',
    city: 'Natal',
    state: 'RN',
    zipCode: '59070-240',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 3,
    cpf: '15287933584',
    password: '12345678',
    name: 'Severino Raul Leonardo Almada',
    dateOfBirth: new Date('1944-03-11T00:00:00'),
    street: 'Avenida Américo Vespúcio',
    number: '772',
    complement: '',
    neighborhood: 'Parque Riachuelo',
    city: 'Belo Horizonte',
    state: 'MG',
    zipCode: '31230-240',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 4,
    cpf: '50705934209',
    password: '12345678',
    name: 'Bento Carlos Severino Drumond',
    dateOfBirth: new Date('1983-04-01T00:00:00'),
    street: 'Rua do Sol',
    number: '396',
    complement: '',
    neighborhood: 'União II',
    city: 'Ji-Paraná',
    state: 'RO',
    zipCode: '76913-271',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 5,
    cpf: '51958927686',
    password: '12345678',
    name: 'Pedro Marcos Vinicius da Paz',
    dateOfBirth: new Date('1992-06-12T00:00:00'),
    street: 'Rua SL - 017',
    number: '195',
    complement: '',
    neighborhood: 'Santa Luzia',
    city: 'Brusque',
    state: 'SC',
    zipCode: '88357-199',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 6,
    cpf: '20145006220',
    password: '12345678',
    name: 'Roberto Rodrigo Bernardo da Mata',
    dateOfBirth: new Date('2004-04-01T00:00:00'),
    street: 'Travessa Padre Thiago',
    number: '276',
    complement: '',
    neighborhood: 'Bosque',
    city: 'Rio Branco',
    state: 'AC',
    zipCode: '69907-550',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 7,
    cpf: '51960385666',
    password: '12345678',
    name: 'Manoel Nathan Fogaça',
    dateOfBirth: new Date('1945-01-15T00:00:00'),
    street: 'Quadra QR 110 Conjunto 18',
    number: '600',
    complement: '',
    neighborhood: 'Samambaia Sul (Samambaia)',
    city: 'Brasília',
    state: 'DF',
    zipCode: '72302-318',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 8,
    cpf: '19599172850',
    password: '12345678',
    name: 'Sarah Lívia da Rosa',
    dateOfBirth: new Date('1957-01-15T00:00:00'),
    street: 'Rua Canaã',
    number: '351',
    complement: '',
    neighborhood: 'Gramame',
    city: 'João Pessoa',
    state: 'PB',
    zipCode: '58068-615',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 9,
    cpf: '35722407607',
    password: '12345678',
    name: 'Mariah Nicole Brenda Carvalho',
    dateOfBirth: new Date('2005-02-12T00:00:00'),
    street: 'Quadra SQS 415 BlocoO',
    number: '817',
    complement: '',
    neighborhood: 'Asa Sul',
    city: 'Brasília',
    state: 'DF',
    zipCode: '70298-150',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 10,
    cpf: '71355120144',
    password: '12345678',
    name: 'Cristiane Patrícia Antonella Lima',
    dateOfBirth: new Date('1998-06-04T00:00:00'),
    street: 'Rua Luís Carlos Martins Pena',
    number: '625',
    complement: '',
    neighborhood: 'Jardim Santa Marina',
    city: 'Jacareí',
    state: 'SP',
    zipCode: '12312-553',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 11,
    cpf: '81104094908',
    password: '12345678',
    name: 'Renan Leandro Márcio Freitas',
    dateOfBirth: new Date('1968-05-23T00:00:00'),
    street: 'Rua das Campainhas',
    number: '593',
    complement: '',
    neighborhood: 'Pricumã',
    city: 'Boa Vista',
    state: 'RR',
    zipCode: '69309-470',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 12,
    cpf: '23496016256',
    password: '12345678',
    name: 'Cecília Cecília Martins',
    dateOfBirth: new Date('1965-05-24T00:00:00'),
    street: 'Rua Pio XII',
    number: '651',
    complement: '',
    neighborhood: 'Bom Retiro',
    city: 'Joinville',
    state: 'SC',
    zipCode: '89223-330',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 13,
    cpf: '49431642263',
    password: '12345678',
    name: 'Lucas Fernando da Cunha',
    dateOfBirth: new Date('2001-03-26T00:00:00'),
    street: 'Rua Marcelino Vieira',
    number: '557',
    complement: '',
    neighborhood: 'Perocão',
    city: 'Guarapari',
    state: 'ES',
    zipCode: '29220-710',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 14,
    cpf: '46331450297',
    password: '12345678',
    name: 'Iago Elias Lucas Baptista',
    dateOfBirth: new Date('1944-03-21T00:00:00'),
    street: 'Rua Quinze de Novembro',
    number: '522',
    complement: '',
    neighborhood: 'Setor Central',
    city: 'Araguaína',
    state: 'TO',
    zipCode: '77803-070',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
  {
    id: 15,
    cpf: '38601274544',
    password: '12345678',
    name: 'Rosângela Ana Moura',
    dateOfBirth: new Date('1950-06-13T00:00:00'),
    street: 'Rua Sebastião Gonçalves de Oliveira',
    number: '317',
    complement: '',
    neighborhood: 'Jardim Maristela',
    city: 'Atibaia',
    state: 'SP',
    zipCode: '12946-718',
    role: Role.ADMIN,
    status: RecordStatus.ACTIVE,
    deletedBy: null,
  },
];

export const reqUserMock = {
  user: { id: 1, cpf: '07450156970', name: 'Cauã João Marcos Monteiro' },
};

export const passwordMock = {
  currentPassword: '12345678',
  newPassword: '12345677',
  confirmPassword: '12345677',
};