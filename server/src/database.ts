import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

import debug from 'debug'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

class User extends Model {
  public id: number
  public name: string
  public email: string
  public password: string

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // associations
  public getHomes!: HasManyGetAssociationsMixin<Home>; // Note the null assertions!
  public addHome!: HasManyAddAssociationMixin<Home, number>;
  public hasHome!: HasManyHasAssociationMixin<Home, number>;
  public countHomes!: HasManyCountAssociationsMixin;
  public createHome!: HasManyCreateAssociationMixin<Home>;
}

class Homes extends Model {
  public id: number
  public address: string
  public price: number
  public description: string
  public owner: number
  public location: [number, number]

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Home.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ownerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
    sequelize,
    tableName: 'projects',
  });



export default sequelize
