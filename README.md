# Lowdb-UI

> Web UI for LowDB by EFHMedia.


## Usage

```sh
npm install lowdb-ui
```

```js
const {UI} = require("lowdb-ui")
const ui = new UI() // default settings (port: 1447, file: db.json, username: admin, password: 1234)
ui.run()


//or

const {UI} = require("lowdb-ui")
const ui = new UI(80, "db2.json", "efhmedia", "9192") // user settings (port: 80, file: db2.json, username: efhmedia, password: 9192)
ui.run()

//you can serve multiple files

const {UI} = require("lowdb-ui")

const ui = new UI()
ui.run()
const ui2 = new UI(80, "db2.json", "efhmedia", "9192")
ui2.run()
```
### Please use custom username and password for the security of your data.