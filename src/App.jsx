import { useEffect, useState } from "react"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

function App() {


  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState('')
  const [loadingState, setLoadingState] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA - ${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched data from Cache")
        return
      }

      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched data from API")

      } catch (error) {
        console.log(error.message)

      }
    }
    fetchAPIData()



  }, [])


  return (
    <>
      {data ? <Main data={data} /> : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>

      )}
      {showModal && <Sidebar handleToggleModal={handleToggleModal} showModal={showModal} data={data} />}
      {data && <Footer handleToggleModal={handleToggleModal} data={data} />}
    </>
  )
}

export default App
