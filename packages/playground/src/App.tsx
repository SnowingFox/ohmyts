import axios from 'axios'
import { defineComponent } from 'vue'

const App = defineComponent(() => {
  axios.get('/api/search?keywords=MELANCHOLY')
  axios.get('/api/comment/music?id=186016&limit=1')

  return () => (
    <div>
      111
    </div>
  )
})

export default App

