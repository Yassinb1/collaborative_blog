let connectionString = 'postgres://localhost/blogapp'

module.exports = {
  development: {
    client: 'pg',
    connection: connectionString,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
};