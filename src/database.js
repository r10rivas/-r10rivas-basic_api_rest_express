import MongoClient from "mongodb";

const connect = async () => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('basic_api_rest_express');
    console.log( 'Data Base connected!' );
    return db;
  } catch (error) {
    console.log( error );
  }
}

export default connect;