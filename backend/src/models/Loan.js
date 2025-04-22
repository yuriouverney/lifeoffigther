export default (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {

      id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      userId:DataTypes.INTEGER,
      amount:DataTypes.INTEGER,
      interest:DataTypes.FLOAT,
      status:{ type:DataTypes.ENUM('open','paid'), defaultValue:'open' }

  }, {
    tableName: 'loans'
  });
  return Loan;
};
