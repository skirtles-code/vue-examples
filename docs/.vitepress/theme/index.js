import DefaultTheme from 'vitepress/theme'
import './styles.css'
import LiveExample from '../components/live-example.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('live-example', LiveExample)
  }
}
