require('dotenv').config({ quiet: true });
require('./database');

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`🔗 Acesso: http://localhost:${PORT}`);
});