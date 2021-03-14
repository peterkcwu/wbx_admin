<template>
  <div class="app-container">
    <fullscreen ref="fullscreen" :fullscreen.sync="fullscreen">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="排名" width="95" sort-by="rank">
          <template slot-scope="scope">
            {{ scope.row.rank_num }}
          </template>
        </el-table-column>
        <el-table-column label="名字" align="center">
          <template slot-scope="scope">
            {{ scope.row.staff_name }}
          </template>
        </el-table-column>
        <el-table-column label="来访总数" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.visit_count }}</span>
          </template>
        </el-table-column>
        <el-table-column label="量房总数" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.measure_count }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设计总数" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.design_count }}</span>
          </template>
        </el-table-column>
      </el-table>
    </fullscreen>
    <button type="button" @click="toggle">Fullscreen</button>
  </div>
</template>

<script>
import { getRankList } from '@/api/table'
import Fullscreen from 'vue-fullscreen/src/component.vue'
export default {
  components: { Fullscreen },
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
      Fullscreen: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getRankList().then(response => {
        console.log(response.data)
        this.list = response.data
        this.listLoading = false
      })
    },
    toggle() {
      this.$refs['fullscreen'].toggle()
      // this.fullscreen = !this.fullscreen
    }
  }
}
</script>
