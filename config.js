module.exports = {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost:5432',
    POSTGRES_DB_NAME: process.env.POSTGRES_DB_NAME || 'postgres',
    POSTGRES_DB_USER: process.env.POSTGRES_DB_USER || 'postgres',
    POSTGRES_DB_PASSWORD: process.env.POSTGRES_DB_PASSWORD || 'mysecretpassword'
}


