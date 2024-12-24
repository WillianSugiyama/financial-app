import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  photoUrl?: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}