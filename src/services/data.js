
export const indoDataMain = async () => {
  const res = await fetch ("https://apicovid19indonesia-v2.vercel.app/api/indonesia/more")
  // console.log(res)
  const data = await res.json()
  // console.log(data.tanggal)
  return data
};

export const indoDataDaily = async () => {
  const res = await fetch ("https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian")
  // console.log(res)
  const data = await res.json()
  // console.log(data.tanggal)
  return data
}


