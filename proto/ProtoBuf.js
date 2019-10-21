var ProtoBuf = require('protobufjs');


var msgBuffer ;
// 載入 Product.proto 檔案
ProtoBuf.load('./Product.proto', function(err, root) {
    if (err)
        throw err;

    // 並取得 Product 資料定義
    var Product = root.lookup('Ecommerce.Product');
    
    // 準備包裝的資料
    var data = {
        // available: true,
        name: 'ApplePen',
        desc: 'The combination of Apple and Pen',
        price: 100.0
    };
    
    // 包裝資料後回傳 Buffer 格式（二進位形態）
    msgBuffer = Product.encode(data).finish();
    // console.log(msgBuffer)
});


// 載入 Product.proto 檔案
ProtoBuf.load('Product.proto', function(err, root) {
    if (err)
        throw err;

    // 並取得 Product 資料定義
    var Product = root.lookup('Ecommerce.Product');
    
    // 解開
    var data = Product.decode(msgBuffer);
    console.log(data)
});