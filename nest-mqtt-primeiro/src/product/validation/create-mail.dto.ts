import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Todos os dados são obrigatórios, o number/Número de telefone precisa ter no minimo 11 digitos (54) 9 9988 7766

export class CreateMailDto {
  // @IsString()
  // @IsNotEmpty({
  //   message: 'Você não especificou seu Nome',
  // })
  // name: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'Você não especificou seu Email',
  })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'Você não especificou o Link da promocao',
  })
  url: string;

  // @IsPhoneNumber('BR')
  // @IsNotEmpty({
  //   message: 'Você não especificou seu Telefone',
  // })
  // number: number;

  // @IsString()
  // @IsNotEmpty({
  //   message: 'Você não especificou sua Cidade/UF',
  // })
  // city: string;

  // @IsString()
  // @IsNotEmpty({
  //   message: 'Você não especificou seu Estado',
  // })
  // state: string;

  // @IsString()
  // @IsNotEmpty({
  //   message: 'Você não especificou o Assunto do email',
  // })
  // body: string;
}
