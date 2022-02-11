export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000)
}

export const convertUnixTimestampToDate = (unixTimestamp, includeYear) => {
    const milliseconds = unixTimestamp * 1000
    const options =   {month: 'numeric', day: 'numeric', year: '2-digit' }
    if (!includeYear) delete options.year
    return new Date(milliseconds).toLocaleDateString('en-US', options)
}

export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days + 7 * weeks)
    newDate.setMonth(newDate.getMonth() + months)
    newDate.setFullYear(newDate.getFullYear() + years)
    return newDate
}