import express from 'express'
import { createApp } from './app.js'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.use(express.static('.'))

server.get('/', (req, res) => {
  const app = createApp()

  renderToString(app)
    .then((html) => {
      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Vue SSR Digital Clock</title>
          <script type="importmap">
            {
              "imports": {
                "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
              }
            }
          </script>
          <script type="module" src="/client.js"></script>
        </head>
        <body>
          <div id="app">${html}</div>
          <script type="module" src="/client.js"></script>
        </body>
      </html>
    `)
    })
    .catch((err) => {
      res.status(500).send('Server Error')
      console.error(err)
    })
  server.use(express.static('.'))
})

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
