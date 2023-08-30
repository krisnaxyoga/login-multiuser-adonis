'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRolesSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique();
      table.string('description', 255).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('roles')
  }
}

module.exports = CreateRolesSchema
