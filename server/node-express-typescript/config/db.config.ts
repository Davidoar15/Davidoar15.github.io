const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const config = {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    DB: DB_NAME,
};
  
export const dialect = "postgres";