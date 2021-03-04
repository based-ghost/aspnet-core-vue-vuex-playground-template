import { SnotifyService } from 'vue-snotify/SnotifyService'

declare module 'vue/types/vue' {
  interface Vue {
    $snotify: SnotifyService
  }
}