const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var pattern = /^Locket/;

if (pattern.test(ua)) {
  var body = JSON.parse($response.body);
  var obj = body.subscriber;
  var data = {
    "expires_date": "2099-09-09T09:09:09Z",
    "original_purchase_date": "2023-09-09T09:09:09Z",
    "purchase_date": "2023-09-09T09:09:09Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  
  // Kích hoạt entitlements
  obj.entitlements = {
    "Gold": Object.assign({}, data, {
      "product_identifier": "com.locket.gold.yearly"
    })
  };
  
  // Kích hoạt subscriptions
  obj.subscriptions = {
    "com.locket.gold.yearly": Object.assign({}, data, {
      "is_sandbox": false,
      "period_type": "normal",
      "billing_issues_detected_at": null,
      "unsubscribe_detected_at": null,
      "expires_date": "2099-09-09T09:09:09Z"
    })
  };

  $done({body: JSON.stringify(body)});
} else {
  $done({});
}
#!name=Locket Gold (Duy Chu Te)
#!desc=Mở khóa Locket Gold: Upload ảnh nét, video dài.
#!author=PhanDucDuy
#!homepage=https://github.com/phanducduy6
#!icon=https://github.com/phanducduy6/locket-gold-by-duychute/raw/main/icon.png
#!select=select

[Script]
# Đã điền sẵn link raw JS của bạn ở dưới:
LocketGold_Core = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts), requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/phanducduy6/locket-gold-by-duychute/main/LocketGold.js

[MitM]
hostname = api.revenuecat.com
