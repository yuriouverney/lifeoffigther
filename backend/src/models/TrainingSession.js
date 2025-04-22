export default (sequelize, DataTypes) => {
  const TrainingSession = sequelize.define('TrainingSession', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      attribute:DataTypes.ENUM('strength','agility','endurance','luck'),
      energyCost:DataTypes.INTEGER

  }, {
    tableName: 'trainingsessions'
  });
  return TrainingSession;
};
