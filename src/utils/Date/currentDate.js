import moment from "moment";

const current = {
  day: moment().date(),
  month: moment().month(),
  year: moment().year(),
  spelledMonth: moment().format("MMM"),
  fullMonth: moment().format("MMMM"),
  nextMonth: moment().add(1, "months"),
  previousMonth: moment().subtract(1, "months"),
};

export default current;
