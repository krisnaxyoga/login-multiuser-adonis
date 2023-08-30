'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRolesIdToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      
      table.integer('role_id').unsigned().references('id').inTable('roles').after('password')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('role_id');
    })
  }
}

module.exports = CreateRolesIdToUsersSchema
