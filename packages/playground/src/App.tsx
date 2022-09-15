import axios from 'axios'
import { defineComponent } from 'vue'

const App = defineComponent(() => {
  axios.get('/api/search?keywords=MELANCHOLY')

  return () => (
    <div>
      111
    </div>
  )
})

export default App

