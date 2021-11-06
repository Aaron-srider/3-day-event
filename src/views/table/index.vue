<template>

  <div class="app-container">
    <div class="topimage">

      <p style="background-image: url(https://img1.gtimg.com/ninja/2/2020/12/ninja160879026293561.png)"></p>

    </div>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0755a7"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">运动员列表</el-menu-item>
    </el-menu>

    <!--主要内容-->
    <div class="main-body">
      <div class="topper">
        冬奥运动员
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
            {{ scope.row.gender }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="国家" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.country }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="参赛项目" min-width="95">
          <template slot-scope="scope">
            {{ scope.row.game }}
          </template>
        </el-table-column>

        <el-table-column label="预赛成绩" min-width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.preGrade }}</span>
          </template>
        </el-table-column>

        <el-table-column label="决赛成绩" min-width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.finGrade }}
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="page-footer">

    </div>

  </div>
</template>

<script>
import page from '@/views/table/index.js'

export default page
</script>

<style scope>
.topper {
  display: block;
  width: auto;
  height: 46px;
  background-color: red;
  background: url(//mat1.gtimg.com/bj2022/ry_material/images/top-jiaobiao.png) no-repeat;
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
  width:1000px;
  margin:0 auto;
}

.el-menu{
  height:40px;
}

.el-menu--horizontal>.el-menu-item {
  line-height:40px;
  height:39px;
}

.el-menu::before{
  content:"";
  display:block;
  height:60px;
  width:100px;
  float:left;
}

.page-footer{
  background: url('https://mat1.gtimg.com/qqcdn/bj2022/common/copyright-bg.jpg');
  height: 

}

</style>
