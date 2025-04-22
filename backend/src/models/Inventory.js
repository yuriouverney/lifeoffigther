export default (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      itemId:DataTypes.INTEGER,
      qty:{ type:DataTypes.INTEGER, defaultValue:1 }

  }, {
    tableName: 'inventorys'
  });
  return Inventory;
};
