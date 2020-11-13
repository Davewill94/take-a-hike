'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.user, {foreignKey: 'user_id'});
      review.belongsTo(models.trails, {foreignKey: 'trail_id'});
      // define association here
    }
  };
  review.init({
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};