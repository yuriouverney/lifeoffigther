export default (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      name:DataTypes.STRING,
      baseDamage:DataTypes.INTEGER

  }, {
    tableName: 'skills'
  });
  return Skill;
};
