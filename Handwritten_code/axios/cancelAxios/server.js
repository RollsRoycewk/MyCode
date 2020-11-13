const express = require("express");
const app = express();

app.get("/comments", (req, res) => {
  // 处理跨域 jsop cors
  res.set("Access-Control-Allow-Origin", "*");

  // 让服务器三秒以后再返回响应
  setTimeout(() => {
    res.json({
      code: 10000,
      data: [
        {
          id: 1,
          title: "劳斯宾利法拉利",
        },
      ],
    });
  }, 3000);
});

app.listen(3000,"localhost",(err)=>{
    if (err) {
        console.log("err",err);
        return
    }
    console.log("服务器启动成功,请访问http://localhost:3000");
})
