const http = require('http');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 输出页面的起始部分
  res.write('<h1>fefe xx</h1>');

  // 模拟异步加载
  setTimeout(() => {
    // 输出一部分初始内容
    res.write('<h1>Streaming Page</h1>');
    res.write('<p>This is the initial content!</p>');

    // 模拟异步加载更多内容
    setTimeout(() => {
      // 追加更多内容
      res.write('<p>This is additional content!</p>');

      // 结束页面
      res.end();
    }, 2000); // 模拟加载延迟2秒
  }, 2000); // 模拟加载延迟2秒
});

// 监听端口
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
