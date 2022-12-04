const Joi = require('joi');


//A Data deve ao menos conter o ano da pesquisa

const validateDate = (req, res, next) => {
  const { date } = req.body;
  const dateValidation = Joi.object({ date: Joi.string().min(4).required() });
  const { error } = dateValidation.validate({ date });
  if (error) {
    return res
      .status(422)
      .json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateDate;