import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
// order of InferAttributes & InferCreationAttributes is important.
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  // 'CreationOptional' is a special type that marks the field as optional
  // when creating an instance of the model (such as using Model.create()).
  declare id: number;
  declare name: number;
  declare password: string;
  declare createAt: CreationOptional<Date>;
  declare updateAt: CreationOptional<Date>;

}