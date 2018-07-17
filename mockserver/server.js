import Koa from "koa";
import path from "path";
import bodyParser from "koa-bodyparser";
import api from "./api";
const app = new Koa();

app.use(bodyParser());

const port = 3100;

// app.use(serve(path.join(__dirname,'assets')));
app.use(api());
app.listen(port);
console.log(`>koa mock-server started,port listen on ${port}`);
