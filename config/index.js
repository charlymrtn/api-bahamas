module.exports = {
  app: 'api-bahamas',
  env: process.env.NODE_ENV,
  session: {
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_KEY
  },
  db: {
    name: process.env.SQL_DB || 'bahamas',
    host: process.env.SQL_HOST || 'mysql.ckrklcnlienq.us-west-2.rds.amazonaws.com',
    port: Number(process.env.SQL_PORT) || 3306,
    user: process.env.SQL_USER || 'admin',
    pass: process.env.SQL_PASS || 'Alkimia123.',
    dialect: process.env.SQL_DIALECT || 'mysql'
  },
  port: Number(process.env.PORT),
  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SESSION,
    callbackURL: process.env.TWITTER_CALLBACK_URL
  },
  remoteLog: {
    host: process.env.LOG_HOST,
    port: Number(process.env.LOG_PORT)
  },
  bpmData: {
    startInstance:
      '/containers/pbil_1.0.33/processes/pbil.clientOnboarding/instances',
    user: process.env.BPM_USER,
    pass: process.env.BPM_PASS,
    container: 'pbil_1.0.33'
  }
};
