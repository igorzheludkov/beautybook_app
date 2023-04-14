export default function objectEqualityCheck(obj1: any, obj2: any) {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return true
      }
    } else {
      return true
    }
  }
  if (obj1 === undefined || obj2 === undefined) {
    return true
  }
  return false
}
