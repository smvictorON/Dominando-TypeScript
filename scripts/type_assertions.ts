
const site: unknown = 'google.com'
const arr: string[] = []

arr.push((site as string))
arr.push(<string>site)

console.log(arr);

