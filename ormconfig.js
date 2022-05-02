const ENV = 'local';

if (ENV === 'local'){
module.exports = {
    "type": "postgres",
    "host": "postgres.regea.com.br",
    "port": 5432,
    "username": "root",
    "password": "R$UU3kgELH@Um7S",
    "database": "intranet",
    "$schema" : "public",
    "entities": [
        "./src/modules/typeorm/entities/*.ts"
    ],
    "migrations": [
        "./src/modules/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir":"./src/modules/database/migrations"
    }
}

}

if (ENV === 'server'){
    module.exports = {
        "type": "postgres",
        "host": "postgres.regea.com.br",
        "port": 5432,
        "username": "root",
        "password": "R$UU3kgELH@Um7S",
        "database": "intranet",
        "$schema" : "public",
        "entities": [
            "./dist/modules/typeorm/entities/*.js"
        ],
        "migrations": [
            "./dist/modules/database/migrations/*.js"
        ],
        "cli": {
            "migrationsDir":"./src/modules/database/migrations"
        }
    }
    
    }