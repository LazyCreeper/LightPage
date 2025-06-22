const AppConfig = {
  data: () => ({
    typed: null,
    curC: 'homeの',
    blogs: [],
    projects: []
  }),
  computed: {
    isDev() {
      const devServers = ['127.0.0.1', 'localhost']
      return devServers.indexOf(window.location.hostname) !== -1
    },
    apiUrl() {
      return this.isDev ? 'http://127.0.0.1:8088' : ''
    }
  },

  methods: {
    initTyped() {
      this.typed = new Typed('#hi', {
        strings: ['Lazy.', 'from GuangXi, China.', 'a student.', 'good at fish.', '......?'],
        typeSpeed: 100,
        loop: true
      })
    },
    navShow(n) {
      this.curC = n
    },

    async getBlog() {
      const data = await (await fetch('https://blog.imlazy.ink:233/index.php/feed/')).text()

      // 解析XML
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(data, 'text/xml')
      const items = xmlDoc.getElementsByTagName('item')
      this.blogs = Array.from(items).map((item) => ({
        title: item.getElementsByTagName('title')[0].textContent,
        link: item.getElementsByTagName('link')[0].textContent
      }))
    },

    async getProjects() {
      const { data } = await (await fetch(this.apiUrl + '/api/projects')).json()
      this.projects = data
    },

    onEnter() {
      if (this.curC === 'homeの') {
        this.initTyped()
      }
    },

    onBeforeLeave() {
      if (this.curC !== 'homeの') {
        this.typed.destroy()
      }
    }
  },
  mounted() {
    this.initTyped()
    this.getProjects()
    this.getBlog()
  }
}

Vue.createApp(AppConfig).mount('#app')
