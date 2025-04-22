export default (sequelize, DataTypes) => {
  const Mission = sequelize.define('Mission', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      title:DataTypes.STRING,
      description:DataTypes.TEXT,
      rewardXp:DataTypes.INTEGER,
      rewardMoney:DataTypes.INTEGER,
      active:{ type:DataTypes.BOOLEAN, defaultValue:true }

  }, {
    tableName: 'missions'
  });
  return Mission;
};
