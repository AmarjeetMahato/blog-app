import getJwtToken from "../helpers/getJwtToken.js";


const adminCookieToken = (admin,res)=>{
    const token = getJwtToken(admin.id)
    const options = {
        expires : new Date(
            Date.now() + 3*24*60*60*1000
        ),
        httpOnly:true
    }
    admin.password = undefined;
    res.status(200).cookie('Admin_token',token,options).json({
        success: true,
        msg:"Admin Logged in",
        admin,
    })
}

export default adminCookieToken