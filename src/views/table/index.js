import { getList } from '@/api/table'
import Athlete from '@/utils/model.js'
import { athletes } from '@/utils/mockdata.js'
import { getPlayerPage } from '@/api/player'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  comments: {
    Pagination
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      listLoading: true,
      atheletList: [],
      page: {
        pages: 2,
        total: 12,
        current: 1,
        size: 10
      }
    }
  },
  created() {
    this.fetchPlayerPages()
  },
  computed: {},
  methods: {
    handleSelect() {

    },
    to(row) {
      return { path: '/table', params: row.id }
    },
    fetchPlayerPages() {
      this.listLoading = true
      getPlayerPage(this.page.current, this.page.size).then(response => {
        console.log(response)
        this.atheletList = []
        for (let i = 0; i < response.records.length; i++) {
          let a = new Athlete()
          a.name = response.records[i].name
          a.sex = response.records[i].sex
          a.age = response.records[i].age
          a.country = response.records[i].country
          a.itemPlay = response.records[i].itemPlay
          a.preResult = response.records[i].preResult
          a.finalResult = response.records[i].finalResult
          a.healthStatus = response.records[i].healthStatus
          a.comeTime = response.records[i].comeTime
          this.atheletList.push(a)
        }
        this.page.total = response.total
        this.page.current = response.current
        this.page.size = response.size
        this.listLoading = false
      })
    }
  }
}
