const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const axios = require('axios');
const cors = require('@koa/cors');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

const debug = process.env.NODE_ENV !== 'production'

router.get('/m', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/rank/list&json=true', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/rank/info/', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/plist/index', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/plist/list', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/singer/class', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/singer/list', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/m/singer/info', async (ctx, next) => {
  const url = 'http://m.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://m.kugou.com',
      host: 'm.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/aproxy/api/v3/search/hot', async (ctx, next) => {
  const url = 'http://mobilecdn.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://mobilecdn.kugou.com',
      host: 'mobilecdn.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/aproxy/api/v3/search/song', async (ctx, next) => {
  const url = 'http://mobilecdn.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://mobilecdn.kugou.com',
      host: 'mobilecdn.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/www/yy/index.php?r=play/getdata', async (ctx, next) => {
  const url = 'http://www.kugou.com';
  const ret = await axios.get(url, {
    headers: {
      referer: 'http://wwww.kugou.com',
      host: 'wwww.kugou.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

// // 加载中间件
app.use(serve('./www'));
app.use(bodyParser());
debug && app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(80, '127.0.0.1');