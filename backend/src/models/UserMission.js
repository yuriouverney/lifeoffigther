export default (sequelize, DataTypes) => {
  const UserMission = sequelize.define('UserMission', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      missionId:DataTypes.INTEGER,
      status:DataTypes.ENUM('active','completed')

  }, {
    tableName: 'usermissions'
  });
  return UserMission;
};
