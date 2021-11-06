import { getList } from '@/api/table'
import Athlete from '@/utils/model.js'
import { athletes } from '@/utils/mockdata.js'

export default {
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
      list: null,
      listLoading: true,
      atheletList: [
        new Athlete()
      ]
    }
  },
  created() {
    this.atheletList = athletes
    this.listLoading = false
  },
  methods: {

    to(row) {
      return { path: '/table', params: row.id }
    },
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
