//회원 인증 API

import Joi from 'joi';
import User from "../../models/user";

export const register = async ctx => {
    //request body 검증
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { username, password } = ctx.request.body;
    try {
        const exists = await User.findByUsername(username);
        if(exists) {
            ctx.status = 409; //conflict
            return;
        }
        const user = new User({
            username,
        })
        await user.setPassword(password);
        await user.save();

        const data = user.toJSON();
        delete data.hashedPassword;
        ctx.body = user.serialize();
    } catch(e) {
        ctx.throw(500, e);
    }
}

export const login = async ctx => {}

export const check = async ctx => {}

export const logout = async ctx => {}