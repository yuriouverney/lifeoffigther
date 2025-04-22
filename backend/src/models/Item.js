export default (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      name:DataTypes.STRING,
      type:DataTypes.ENUM('gear','consumable'),
      attrBonus:DataTypes.JSON,
      price:DataTypes.INTEGER,
      stock:{ type:DataTypes.INTEGER, defaultValue:0 }

  }, {
    tableName: 'items'
  });
  return Item;
};
