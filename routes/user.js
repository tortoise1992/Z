const UserModel=require('../models/user')

module.exports={
  async signup(ctx,next){
    const user={
      name:'ahui',
      password:'123456',
      email:'772084015@qq.com'
    }
    const result=await UserModel.create(user)

    ctx.body=result

  }
}
