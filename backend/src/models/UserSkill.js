export default (sequelize, DataTypes) => {
  const UserSkill = sequelize.define('UserSkill', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      skillId:DataTypes.INTEGER,
      level:{ type:DataTypes.INTEGER, defaultValue:1 }

  }, {
    tableName: 'userskills'
  });
  return UserSkill;
};
