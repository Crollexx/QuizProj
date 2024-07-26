const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Конфигурация
serverConfig(app);

// Маршрутизация
app.use('/', indexRouter);

// Прослушивания порта
app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
