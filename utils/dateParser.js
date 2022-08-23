export default function dateParser(date, legacy) {
    let newDate;
    newDate = date.split('-');
    newDate[2] = newDate[2].split('T')[0];
    newDate = newDate.splice(0, 3);

    if (legacy) {
        newDate = `${newDate[0]}`
    } else {
        newDate = `${newDate[1]}/${newDate[2]}/${newDate[0]}`
    }

    return newDate;
}