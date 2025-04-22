export default (sequelize, DataTypes) => {
  const Clan = sequelize.define('Clan', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      name:{ type:DataTypes.STRING, unique:true },
      ownerId:DataTypes.INTEGER

  }, {
    tableName: 'clans'
  });
  return Clan;
};
