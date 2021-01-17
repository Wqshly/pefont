// 时间转换
const formatDate = {
  // 年约日格式
  formatDateInDay (date) {
    if (date === null) {
      return null
    }
    return date.slice(0, 4) + '年' + date.slice(5, 7) + '月' + date.slice(8, 10) + '日 '
  },
  formatDateInSecond (date) {
    if (date === null) {
      return null
    }
    return date.slice(0, 4) + '年' + date.slice(5, 7) + '月' + date.slice(8, 10) + '日 ' + date.slice(11, 19)
  }
}

export default formatDate
