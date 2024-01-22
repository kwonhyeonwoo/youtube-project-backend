import "./models/Video.js";
import "./db";
import app from "./server.js";
// listen설정   
app.listen(4000, () => console.log(`server open`))