// import {
//     IsBoolean,
//     IsEmail,
//     IsNotEmpty,
//     IsString,
//     Length,
// } from 'class-validator';

export class CreateBarberDto {
  public id: number;

  //  @IsString()
  //@Length(2, 10)
  public name: string;

  public email: string;

  //  @IsString()
  //   @IsEmail()
  //   @IsNotEmpty()
  public phone: string;

  // @IsString()
  // @Length(5, 10)
  readonly rating: string;

  // @IsBoolean()
  public status: boolean = true;

  public picture: string = null;
}
