export default function definedValuesFilter(object: {[key: string]: any}) {
  return Object.assign(
    {},
    ...Object.entries(object)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => ({ [key]: value }))
  )
}
