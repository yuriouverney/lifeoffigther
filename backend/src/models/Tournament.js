export default (sequelize, DataTypes) => {
  const Tournament = sequelize.define('Tournament', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      season:DataTypes.STRING,
      startedAt:DataTypes.DATE,
      endedAt:DataTypes.DATE

  }, {
    tableName: 'tournaments'
  });
  return Tournament;
};
