import moment, { Moment } from 'moment';

export const formatDate = (date: Date | Moment) => {
  return moment(date).format('Do MMM YYYY');
};
