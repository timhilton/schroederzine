export default function dateParser(date, legacy) {
    const newDate = new Date(date);
  
    if (legacy) {
      return `${newDate.getUTCFullYear()}`;
    } else {
      const month = newDate.getUTCMonth() + 1;
      const day = newDate.getUTCDate();
      const year = newDate.getUTCFullYear();
      return `${month}/${day}/${year}`;
    }
  }