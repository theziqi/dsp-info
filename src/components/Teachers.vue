<template>
  <div id="teachers">
    <div class="i-content">《数字信号处理》有一支优秀的教学队伍。课程组20名教师，每年承担全校2000多学生和20名留学生的教学任务。 </div>
    <!-- <div v-for="(item,index) in teachersData" :key="index">
      <div class="tl">
        <span>{{item.name}}</span>
        <span>{{item.title}}</span>
        <span>{{item.duty}}</span>
        <span>
          <router-link :to="'/teacher/' + item.name">>>详细介绍
          </router-link>
        </span>
      </div>
    </div> -->
    <a-table :columns="columns" :data-source="teachersData" :pagination="false">
      <template slot="detail" slot-scope="text">
        <router-link :to="'/teacher/' + text">>>详细介绍
        </router-link>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'Teachers',
  data(){
      return {
        columns: [
              {
                  title: "姓名",
                  dataIndex: "name",
                  width: 200,
                  align: 'center'
              },
              {
                  title: "职称",
                  dataIndex: "title",
                  width: 200,
                  align: 'center'
              },
              {
                  title: "职责",
                  dataIndex: "duty",
                  width: 200,
                  align: 'center'
              },
              {
                title: '详情',
                dataIndex: 'detail',
                scopedSlots: { customRender: 'detail' },
                width: 200,
                align: 'center'
              },
          ],
          teachersData:[
            {name:"苏菲", title:"教授", duty:"课程负责人", detail: "苏菲"},
            {name:"门爱东", title:"教授", duty:"主讲教师", detail: "门爱东"},
            {name:"赵志诚", title:"副教授", duty:"主讲教师", detail: "赵志诚"},
            {name:"刘芳芳", title:"讲师", duty:"主讲教师", detail: "刘芳芳"},
            {name:"王雷", title:"教授", duty:"主讲教师", detail: "王雷"},
            {name:"郭莉", title:"教授", duty:"主讲教师", detail: "郭莉"},
            {name:"张建华", title:"教授", duty:"主讲教师", detail: "张建华"},
            {name:"王海婴", title:"副教授", duty:"主讲教师", detail: "王海婴"},
            {name:"邹卫霞", title:"副教授", duty:"主讲教师", detail: "邹卫霞"},
            {name:"李江军", title:"讲师", duty:"主讲教师", detail: "李江军"},
            {name:"郭彩丽", title:"教授", duty:"主讲教师", detail: "郭彩丽"},
            {name:"王生楚", title:"副教授", duty:"主讲教师", detail: "王生楚"},
            {name:"田磊", title:"讲师", duty:"主讲教师", detail: "田磊"},
            {name:"杜海清", title:"讲师", duty:"主讲教师", detail: "杜海清"},
            {name:"孙松林", title:"教授", duty:"主讲教师", detail: "孙松林"}
          ]
      }
  },
  methods: {
    handleClick(e){
      console.log(e)
    }
  }
}
</script>


<style lang="less" scoped>
#teachers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tl {
  font-size: 17px;
  font-weight: bold;
  margin: 10px auto;
  span {
    margin-right: 50px;
  }
}
.i-content {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
