const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 Tebrikler! Yapay zeka ile hazırladığım ilk projem Railway\'de canlıda!</h1>');
});

app.listen(PORT, () => console.log(`Çalışıyor: ${PORT}`));
