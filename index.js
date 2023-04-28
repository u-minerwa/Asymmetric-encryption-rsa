const prompt = require("prompt"),
    app = require('./app'),
    path = require('path'),
    keysGenerator = require('./keysGenerator');

    // Следующее выводится в консоль: 
console.log(`
    1.Generate key pair
    2.Encrypt with public key
    3.Encrypt with private key
    4.Decrypt with public key
    5.Decrypt with private key
    `)

prompt.start()

prompt.get(['mode', 'keyPath'], function (err, result) {
    const keyPath = path.resolve(result.keyPath)                // resolve - "Абсолютный" путь. 
    if (+result.mode === 1) keysGenerator.generateKeys(keyPath) // Если выбран пункт 1, генерируем ключи. В противном случае идём к функции execute. 
    else app.execute(result.mode, keyPath)
});

