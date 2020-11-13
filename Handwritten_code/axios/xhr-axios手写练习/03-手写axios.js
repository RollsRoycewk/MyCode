(function (w) {
  function axios({ method, url, params, data }) {
    method = method.toUpperCase();
    return new Promise((resolve, reject) => {
      // 1.创建xhr对象
      const xhr = new XMLHttpRequest();
      // 2.绑定onreadystatechange
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = {
              request: xhr,
              status: xhr.status,
              data: JSON.parse(xhr.responseText),
            };
            resolve(response);
          } else {
            reject("error");
          }
        }
      };
      let querystr = "";
      if (params) {
        querystr = Object.keys(params)
          .reduce((p, c) => {
            return p + `${c}=${params[c]}&`;
          }, "?")
          .slice(1, -1);
      }
      // 3.设置请求信息
      xhr.open(method, url + querystr);
      // 4.发送请求
      let send_data = "";
      if (
        (method === "POST" || method === "PUT" || method === "PATCH") &&
        data
      ) {
        xhr.setRequestHeader("content-type", "application/json");
        send_data = JSON.stringify(data);
      }
      xhr.send(send_data);
    });
  }
  w.axios = axios;
})(window);
