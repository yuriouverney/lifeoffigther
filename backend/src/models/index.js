import Sequelize from 'sequelize';
import dbConfig from '../config/database.js';
import fs from 'fs';
import path from 'path';
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password,{
  host:dbConfig.host, dialect:dbConfig.dialect, logging:false
});

const models = {};
const dirname = path.dirname(new URL(import.meta.url).pathname);
fs.readdirSync(dirname).filter(f=>f!=='index.js').forEach(file=>{
  const model = (await import(`./${file}`)).default(sequelize, Sequelize.DataTypes);
  models[model.name] = model;
});

// associations
models.User.belongsToMany(models.Skill,{ through:models.UserSkill });
models.Skill.belongsToMany(models.User,{ through:models.UserSkill });

models.User.hasMany(models.Inventory,{foreignKey:'userId'});
models.Inventory.belongsTo(models.User,{foreignKey:'userId'});
models.Item.hasMany(models.Inventory,{foreignKey:'itemId'});
models.Inventory.belongsTo(models.Item,{foreignKey:'itemId'});

models.User.hasMany(models.BankAccount,{foreignKey:'userId'});
models.BankAccount.belongsTo(models.User,{foreignKey:'userId'});

models.User.hasMany(models.Loan,{foreignKey:'userId'});
models.Loan.belongsTo(models.User,{foreignKey:'userId'});

models.Clan.hasMany(models.ClanMember,{foreignKey:'clanId'});
models.ClanMember.belongsTo(models.Clan,{foreignKey:'clanId'});
models.User.hasMany(models.ClanMember,{foreignKey:'userId'});
models.ClanMember.belongsTo(models.User,{foreignKey:'userId'});

export { sequelize };
export default models;
