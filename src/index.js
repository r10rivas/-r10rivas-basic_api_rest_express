import '@babel/polyfill';
import app from "./server";


// Function main app
const main = async () => {
  await app.listen(app.get('port'));
  console.log(`Server started on ${app.get('port')}`);
}

main();