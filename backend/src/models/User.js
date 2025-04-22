export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      email:    { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      fightingStyle: DataTypes.STRING,
      strength:  { type: DataTypes.INTEGER, defaultValue: 5 },
      agility:   { type: DataTypes.INTEGER, defaultValue: 5 },
      endurance: { type: DataTypes.INTEGER, defaultValue: 5 },
      luck:      { type: DataTypes.INTEGER, defaultValue: 5 },
      experience:{ type: DataTypes.INTEGER, defaultValue: 0 },
      level:     { type: DataTypes.INTEGER, defaultValue: 1 },
      energy:    { type: DataTypes.INTEGER, defaultValue: 100 },
      money:     { type: DataTypes.INTEGER, defaultValue: 1000 }

  }, {
    tableName: 'users'
  });
  return User;
};
