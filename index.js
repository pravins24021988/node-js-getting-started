const { Client } = require('pg');
var connectionString = "postgres://gecngtmfnjkjye:40c377e18fd6c75e680a26884d39b7ecd09cceb82088b62251e16beac9bb3fa9@ec2-3-91-135-72.compute-1.amazonaws.com:5432/danhgn18eb2cj5"

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM salesforce.case;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
