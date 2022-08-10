const salaryModel = require("../model/salary_data");

exports.Salleryfilter = async (req, res) => {
  try {
    let {
      sort,
      job_title,
      age,
      industry,
      currency,
      salary,
      location,
      experience,
    } = req.query;

    sort = sort ? { [sort]: 1 } : {};
    const filter = {
      job_title,
      age,
      industry,
      currency,
      salary,
      location,
      experience,
    };
    Object.keys(filter).forEach((key) => {
      if (filter[key] === undefined) {
        delete filter[key];
      }
    });
    console.log(filter, sort);
    const salaryData = await salaryModel.find(filter).sort(sort);
    res.send({ success: true, data: salaryData });
  } catch (error) {
    res.send({ success: false });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const salaryData = await salaryModel.find({ _id: id });
    res.send({ success: true, data: salaryData });
  } catch (error) {}
};
