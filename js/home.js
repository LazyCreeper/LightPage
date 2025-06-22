const AppConfig = {
  data: () => ({
    curC: 'homeの',
    blogs: []
  }),
  methods: {
    initTyped() {
      new Typed('#hi', {
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
    }
  },
  mounted() {
    this.initTyped()
    this.getBlog()
  }
}

Vue.createApp(AppConfig).mount('#app')
