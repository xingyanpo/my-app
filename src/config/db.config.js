import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'xypcn.top',
  user: 'root',
  password: 'mysql_WSEMBT',
  database: 'dev',
  waitForConnections: true,
  connectionLimit: 20,
  maxIdle: 5, 
  idleTimeout: 30000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export default pool