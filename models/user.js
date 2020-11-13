'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.trails, {foreignKey: 'user_id', as: 'AddedTrails'});
      user.belongsToMany(models.trails, {
        as: 'savedtrails',
        through: 'savedtrail',
        foreignKey: 'user_id',
        otherKey: 'trail_id'
      });
      user.hasMany(models.review, {foreignKey: 'user_id'});
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    img: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};