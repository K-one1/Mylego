<template>
  <div>
    <h2>全部商品</h2>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :cell-style="tableRowStyle"
      :header-cell-style="tableRowStyle"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="全选" width="60"></el-table-column>
      <el-table-column prop="commodity" label="商品" width="240">
        <template slot-scope="scope">{{ scope.row.commodity }}</template>
      </el-table-column>
      <el-table-column label="单价">
        <template slot-scope="scope">{{ scope.row.price+"元" }}</template>
      </el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
          <button class="btn" @click="numdec(scope.$index,-1)" :disabled="scope.row.num<1">-</button>
          {{scope.row.num}}
          <button class="btn" @click="numdec(scope.$index,+1)">+</button>
        </template>
      </el-table-column>
      <el-table-column label="小计">
        <template slot-scope="scope">{{scope.row.price*scope.row.num}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px" class="bottom">
      <el-checkbox @change="toggleSelection(tableData)" :checked="checkbox">反选</el-checkbox>
      <div class="b-box">
        <p>
          总计：
          <span>{{price}}元</span>
        </p>
        <el-button type="primary" :disabled="price<1" @click="Enter">确认支付</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          commodity: "王小虎1",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-02",
          commodity: "王小虎2",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-04",
          commodity: "王小虎3",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-01",
          commodity: "王小虎4",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-08",
          commodity: "王小虎5",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-06",
          commodity: "王小虎6",
          price: 8,
          num: 1
        },
        {
          date: "2016-05-07",
          commodity: "王小虎7",
          price: 8,
          num: 1
        }
      ],
      multipleSelection: [],
      checkbox: false
    };
  },
  methods: {
    toggleSelection(rows) {
      console.log(rows);
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete(index, row) {
      for (let obj = 0; obj < this.tableData.length; obj++) {
        if (obj == index) {
          this.tableData.splice(obj, 1);
          break;
        }
      }
    },
    numdec(index, val) {
      for (let obj = 0; obj < this.tableData.length; obj++) {
        if (obj == index) {
          this.tableData[obj].num += val;
          break;
        }
      }
    },
    Enter(){
      this.$store.commit("changeNum",this.tableData.length)
    },
    //样式
    tableRowStyle(row, rowIndex) {
      return "text-align:center";
    }
  },
  computed: {
    price() {
      let allPrice = 0;
      this.tableData.forEach(obj => (allPrice += obj.num * obj.price));
      return allPrice;
    }
  }
};
</script>

<style lang="less" scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  .b-box {
    display: flex;
    margin-right: 68px;
    align-items: center;
    p{
      margin-right: 40px;
    }
  }
}
</style>