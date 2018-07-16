import Router from 'koa-router';
import compose from 'koa-compose';
import Mock from 'mockjs';
const router = new Router();

router.get('/todo/v1/todos',ctx => {
  const data = Mock.mock({
    "code": 200,
    "msg": "success",
    "data|10-15":[{
      "id":"@Id()",
      "name":"@cword(5,10)",
      "status":"@pick([0,1])",
      "createDate":"@datetime(yyyy-MM-dd)",
      "finishedDate":"@datetime(yyyy-MM-dd)"
    }]
  });
  ctx.body = data;
})
.post('/todo/v1/todo',ctx => {
  const reqData = ctx.request.body;
  const data = Mock.mock({
    "code": 200,
    "msg": "success",
    "data": {
      "id":"@Id()",
      "name":reqData.name,
      "status":0,
      "createDate":"@datetime(yyyy-MM-dd)",
      "finishedDate":"@datetime(yyyy-MM-dd)"
    }
  });
  ctx.body = data;
})
.patch('/todo/v1/todo/:id',ctx => {
  const id = ctx.params;
  const body = ctx.request.body;
  console.log(id,body);
  const data = Mock.mock({
    "code": 200,
    "msg": "success",
    "data": body
  });
  ctx.body = data;
})
.delete('/todo/v1/todo/:id',ctx => {
  console.log(ctx.params.id);
  const id = ctx.params.id;
  const data = Mock.mock({
    "code": 200,
    "msg": "success",
    "data": {
      "id":id,
    }
  });
  ctx.body = data;
})

// router.get('*', async (ctx, next) => {
//     ctx.body = await ctx.render('404');
// })

const routes = () => {
  return compose([
    router.routes(),
    router.allowedMethods()
  ])
}

export default routes
