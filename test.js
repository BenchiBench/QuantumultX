// $request, $response, $notify(title, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.body, $request.headers
// $response.statusCode, $response.headers, $response.body

var body = $response.body;
var obj = JSON.parse(body);

//$notify("HAHA", "Sucess");
$notification.post("HAHA", "Sucess");
obj['result'] = 0;
body = JSON.stringify(obj);

$done(body);
