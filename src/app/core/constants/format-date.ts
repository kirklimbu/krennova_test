export class FormatDate {
  // NepaliDate (year,month,date)
  formattedDate: any;
  getFormatDate(date): any {
    console.log("format date called" + date);

    return (this.formattedDate =
      date.year +
      "/" +
      ("0" + (date.month + 1)).slice(-2) +
      "/" +
      ("0" + date.day).slice(-2));

    console.log("GET formated date called" + this.formattedDate);
  }
}
