class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };
    const exclude = ['page', 'sort', 'limit', 'fields'];
    exclude.forEach((el) => delete queryObj[el]);

    //2) Advanced filtering(Greter than, Less than)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (data) => `$${data}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skipCnt = (page - 1) * limit;
    this.query = this.query.skip(skipCnt).limit(limit);
    return this;
  }
  limit() {
    if (this.queryString.fields) {
      const limits = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(limits);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }
}
module.exports = ApiFeatures;
