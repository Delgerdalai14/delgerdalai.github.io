const sql = require('./db');

module.exports.searchWord = function (req, res) {
  const { word = '' } = req.query;
  const response = {
    status: 200,
    message: '',
  };
  sql.query(
    `SELECT * FROM entries WHERE word LIKE '${word}' LIMIT 15`,
    (err, dbResponse) => {
      if (err) {
        console.log('error: ', err);
        response.status = 500;
        response.message = err;
      }
      if (!dbResponse.length) {
        response.status = 404;
        response.message = { message: 'Word not found' };
      }
      if (dbResponse.length) {
        response.status = 200;
        response.message = dbResponse;
      }
      return res.status(response.status).json(response.message);
    }
  );
};