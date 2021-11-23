const {humanResource} = require("../models");
const Joi = require("joi");

module.exports = {
  createHR: async (req, res) => {
    const body = req.body;
    console.log(req.body.username)
    try {
      const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        companyName: Joi.string().required(),
      });
      const check = schema.validate({ ...body }, { abortEarly: false });
      if (check.error) {
        return res.status(400).json({
          status: "failed",
          message: "Bad Request",
          errors: check.error["details"][0]["message"],
        });
      }
      const user = await humanResource.create(body);
      return res.status(200).json({
        success: true,
        message: "Successfully created user account",
        data: user
      })
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  },
  getHR: async(req,res)=>{
    try {
      const users = await humanResource.findAll();
      if (!users.length) {
        return res.status(400).json({
          status: "failed",
          message: "There's no user in database!",
        });
      } else {
        return res.status(200).json({
          success: { message: "This is the list of users" },
          data: users,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: error.message || "Internal Server Error",
      });
    }
  }
}
