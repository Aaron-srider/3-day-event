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
      atheletList: [
        new Athlete()
      ],
      page: {
        pages: 2,
        total: 12,
        current: 1,
        size: 10
      }
    }
  },
  created() {
    this.atheletList = athletes
    this.listLoading = false
  },
  computed: {

  },
  methods: {
    to(row) {
      return { path: '/table', params: row.id }
    },
    fetchPlayerPages() {
      this.listLoading = true
      getPlayerPage().then(response => {
        this.atheletList = response.data.records
        this.page.total = response.data.total
        this.page.current = response.data.current
        this.page.size = response.data.size
        this.listLoading = false
      })
    }
  }
}
