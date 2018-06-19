const Koa=require('koa')
const app=new Koa()
const path=require('path')
const views=require('koa-views')
const router=require('./routes')
const serve=require('koa-static')
const mongoose=require('mongoose'),CONFIG=require('./config/config')
mongoose.connect(CONFIG.mongodb)
app.use(views(path.join(__dirname,'views'),{
  map:{
    html:'nunjucks'
  }
}))
app.use(serve(
  path.join(__dirname,'public')
))
router(app)

app.listen(3000,()=>{
  console.log('server is runing at 3000')
})
