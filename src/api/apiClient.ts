const BASE_URL =
  "https://rjzt977aai.execute-api.eu-central-1.amazonaws.com/prod"
export const apiClient = {
  get: async (path: string) => {
    const res = await fetch(`${BASE_URL}/${path}`, {
      method: "GET",
      headers: {
        Authorization: import.meta.env.VITE_TOKEN,
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    })

    return res.json()
  },
}
