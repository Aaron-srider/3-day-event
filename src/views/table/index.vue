<template>

  <div class="app-container">

    <!--顶部图片-->
    <div class="topimage">
      <p style="background-image: url(http://47.111.5.149:10081/%E5%86%AC%E5%A5%A5%E4%BC%9A%E6%A0%87%E9%A2%982.png)"></p>
    </div>

    <!--横向菜单-->
    <el-menu
      default-active=1
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0755a7"
      text-color="#fff"
      active-text-color="rgb(66, 210, 233)"
    >
      <!--<el-menu-item index="1">运动员列表</el-menu-item>-->
    </el-menu>

    <!--主要表格-->
    <div class="main-body">
      <div class="topper">
        速度滑冰-男子项目-1500米
        <!--冬奥运动员-->
      </div>
      <el-table
        v-loading="listLoading"
        :data="atheletList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="姓名" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>

        <el-table-column label="性别" min-width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.sex }}
          </template>
        </el-table-column>

        <el-table-column label="年龄" min-width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.age }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="国家" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.country }}
          </template>
        </el-table-column>

        <!--<el-table-column align="center" label="参赛项目" min-width="95">-->
        <!--  <template slot-scope="scope">-->
        <!--    {{ scope.row.itemPlay }}-->
        <!--  </template>-->
        <!--</el-table-column>-->

        <el-table-column align="center" label="预赛成绩" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.preResult }}
          </template>
        </el-table-column>


        <el-table-column align="center" label="决赛成绩" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.finalResult }}
          </template>
        </el-table-column>

        <el-table-column label="健康状态" min-width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.healthStatus }}
          </template>
        </el-table-column>

        <el-table-column label="来华时间" min-width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.comeTime }}</span>
          </template>
        </el-table-column>

        <!--<el-table-column label="操作" min-width="110" align="center">-->
        <!--  <template slot-scope="scope">-->
        <!--    <router-link :to='to(scope.row)'>查看详情</router-link>-->
        <!--  </template>-->
        <!--</el-table-column>-->
      </el-table>

      <!--分页组件-->
      <pagination
        v-show="page.total > 0"
        :total="page.total"
        :page.sync="page.current"
        :limit.sync="page.size"
        @pagination="fetchPlayerPages"
      />
    </div>

  </div>
</template>

<script>
import page from '@/views/table/index.js'
// import Pagination from '@/components/Pagination'

export default page
</script>

<style scope>
.topper {
  display: block;
  width: auto;
  height: 46px;
  background-color: red;
  background: url(http://47.111.5.149:10081/%E5%86%AC%E5%A5%A5%E4%BC%9A%E6%A0%8F%E7%9B%AE%E9%A1%B6%E6%A0%87.png) no-repeat;
  line-height: 46px;

  font-size: 22px;
  font-weight: bold;
  color: #249ddd;
  margin-top: 24px;

  margin-bottom: 24px
}

.topimage {
  height: 180px;
  z-index: 1;
}

.topimage p {
  height: 100%;
  background-position: center;
}

.app-container {
  padding: 0px;
}

.main-body {
  width: 1000px;
  margin: 0 auto;
}

.el-menu {
  height: 40px;
}

.el-menu--horizontal > .el-menu-item {
  line-height: 40px;
  height: 39px;
}

.el-menu::before {
  content: "";
  display: block;
  height: 60px;
  width: 100px;
  float: left;
}

a:hover, a:focus {
  text-decoration: underline;
}

.is-active {
  color: rgb(245, 244, 241);
  border-bottom: 5px solid rgb(66, 210, 233);
}

</style>
