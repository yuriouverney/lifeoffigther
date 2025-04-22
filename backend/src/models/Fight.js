export default (sequelize, DataTypes) => {
  const Fight = sequelize.define('Fight', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      challengerId:DataTypes.INTEGER,
      opponentId:DataTypes.INTEGER,
      log:DataTypes.JSON,
      winnerId:DataTypes.INTEGER

  }, {
    tableName: 'fights'
  });
  return Fight;
};
