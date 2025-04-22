export default (sequelize, DataTypes) => {
  const BankAccount = sequelize.define('BankAccount', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      balance:{ type:DataTypes.INTEGER, defaultValue:0 }

  }, {
    tableName: 'bankaccounts'
  });
  return BankAccount;
};
