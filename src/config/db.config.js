import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'xypcn.top',
  user: 'root',
  password: 'mysql_y5nKYY',
  database: 'dev',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});