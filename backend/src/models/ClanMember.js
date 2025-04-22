export default (sequelize, DataTypes) => {
  const ClanMember = sequelize.define('ClanMember', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      clanId:DataTypes.INTEGER,
      userId:DataTypes.INTEGER,
      role:{ type:DataTypes.ENUM('leader','member'), defaultValue:'member' }

  }, {
    tableName: 'clanmembers'
  });
  return ClanMember;
};
