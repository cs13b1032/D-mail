export function showDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const month = months[today.getMonth() - 1];
    return {
      year: year,
      month: month,
      date: date,
    };
  }