module.exports={
  async index(ctx,next){
    await ctx.render('index',{
      title:'ahui',
      desc:'测试一下'
    })
  }
}
