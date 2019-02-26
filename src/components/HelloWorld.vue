<template>
<div class = "login box" style = "background-color: brown;">
  <div style = "background-color: white;">
    <div class="dummyInline">
      <img src="/Users/niyazmohammed1/Documents/exam/project/src/assets/logo.png">
    </div>
    <div class="dummyInline" >بيرق أبناء القبائل</div>
    <div class="dummyInline"><i class="fa fa-bars"></i></div>

    <div class = "sec ">
        
ملاحظه;لا تعد نتااج مذكورة ادناه نحاإية وتعتمد بشكل رئيسي علا قرارات الجنة المنظمة للمحرجان ونتاإج الفحص الطبي 
    </div>
  </div>
  
  <br>
  <div class = "row txtColor" >
      <div class=" col-sm-1 dummyInline1" ></div>
      <div class="col-sm-1 dummyInline1">
          <span v-on:click = "Removee()"><i class="fa fa-bars" ></i></span>
      </div>
      <div class=" col-sm-2 dummyInline1" style="background-color:red;"><span v-on:click = "Removee()">
          أرشيف
      </span></div>
      <div class=" col-sm-4 dummyInline1" ></div>
      <div class="col-sm-2 dummyInline1" >
          <i class="fa fa-plus"></i>
      </div>
      <div class="col-sm-1 dummyInline1" >
          <i class="fa fa-arrow-right"></i>
      </div>
      <div class=" col-sm-1 dummyInline1" ></div>
  </div>

  <br>
  <div class = "row txtColor">
      <div class=" col-sm-1 dummyInline1" ></div>
      <div class="col-sm-1 dummyInline1">
          النقاط
      </div>
      <div class=" col-sm-3 dummyInline1" >
          الرموز
      </div>
      <div class="col-sm-3 dummyInline1" >
          السم
      </div>
      <div class="col-sm-2 dummyInline1" >
          المركز
      </div>
      <div class=" col-sm-2 dummyInline1" ></div>
  </div>
  <br>

 <div v-for="user in users1" class="panel-group"  id="accordion" style = "padding-left:10px;padding-right :10px;background-color: brown; ">
    <div   class="panel panel-default" style = "background-color: yellow;">
      <div  class="panel-heading" style = "background-color: yellow;">
        <!--<h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp asna</a>
        </h4>-->
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" :href="'#collapse1'+ user.value">
          <div  class = "row" >
              
              <div class="col-sm-2 dummyInline1">
                 {{user.point}}          
                 </div>
              <div class=" col-sm-2 dummyInline1" >
                  {{user.code}}
              </div>
              <div class="col-sm-4 dummyInline1" >
                {{user.name}}
              </div>
              <div class="col-sm-2 dummyInline1" >
                 {{user.num}}
              </div>
              <div class=" col-sm-2 dummyInline1" ><i class="fa fa-gift"></i></div>
          </div></a>
        </h4>
      </div>
      <div :id="'collapse1'+ user.value" class="panel-collapse collapse in">
        <div class="panel-body">
          <table style = "background-color: lightblue;">
            <thead>
                <tr >
                    <th style = "text-align: right;">حول وزمول</th>
                    <th style = "text-align: right;">ثناىا</th>
                    <th  style = "text-align: right;">إىذاع</th>
                    <th  style = "text-align: right;">لقىا</th>
                    <th  style = "text-align: right;">حقاقه</th>
                    <th  style = "text-align: right;">السن</th>
                </tr>
              </thead>
              <tbody>
                  <tr  v-for="achievement in achievements"  v-if="user.value ===achievement.name">
                    <td>{{achievement.cat1}}</td>
                    <td>{{achievement.cat2}}</td>
                    <td>{{achievement.cat3}}</td>
                    <td>{{achievement.cat4}}</td>
                    <td>{{achievement.cat5}}</td>
                    <td>{{achievement.position}}</td>
                  </tr>
              
              </tbody>
          </table><br>

          <div class="panel-group" id="accordion1" style = "background-color: yellow;">
            <div class="panel panel-default" style = "background-color: yellow;">
              <div class="panel-heading" style = "background-color: brown;">
                <h4 class="panel-title">
                  <a data-toggle="collapse"  :href="'#collapse21'+ user.value">
                    <div class = "row txtColor">
                      <div class=" col-sm-2 dummyInline1" ><i class="fa fa-gift"></i></div>
                      <div class="col-sm-2 dummyInline1">
                          12
                      </div>
                      <div class="col-sm-8 dummyInline1" style ="text-align: right;">
                        محرجان ولي عحد دبي 
                      </div>
                    </div>
                  </a>
                </h4>
              </div>
            
              <div :id="'collapse21' + user.value" class="panel-collapse collapse">
                <div  v-for="event in event1"  v-if="user.value ===event.value"  class="panel-body">
                    <div class="row" >
                      <div class="col-sm-4" ><h4 class="x">  المركز</h4>
                          <p class="x">{{event.position}}</p>
                      </div>
                      <div class="col-sm-4" ><h4 class="x">لشوط </h4>
                      <p class="x">{{event.round}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">التاريخ</h4>
                      <p class="x">{{event.date}}</p></div>
                    </div>
                    <div class="row">
                      
                      <div class="col-sm-4" ><h4 class="x">النقاط</h4>
                      <p class="x">{{event.point}}</p>
                      </div>
                        <div class="col-sm-4" ><h4 class="x">التوقيت</h4>
                      <p class="x">{{event.time}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">السن</h4>
                      <p class="x">{{event.age}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-8" ><h4 class="x">رابط الفىديو</h4><hr>
                      <p class="x"><a :href="event.url">Video URL</a></p>
                    </div>
                  </div
                </div>
              </div>
            </div><br>

            <div class="panel panel-default" style = "background-color: yellow;">
              <div class="panel-heading" style = "background-color: brown;">
                <h4 class="panel-title">
                  <a data-toggle="collapse"  :href="'#collapse31' + user.value">
                  
                  <div class = "row txtColor">
                      <div class=" col-sm-2 dummyInline1" ><i class="fa fa-gift"></i></div>
                      <div class="col-sm-2 dummyInline1">
                          2
                      </div>
                      
                      <div class="col-sm-8 dummyInline1" style ="text-align: right;">
                        محزجان الشىخ محمد بن زاىد 
                      </div>
                    </div>
                  
                  </a>
                </h4>
              </div>
              <div :id="'collapse31' + user.value" class="panel-collapse collapse">
                <div  v-for="event in event2"  v-if="user.value ===event.value"  class="panel-body">
                    <div class="row" >
                      <div class="col-sm-4" ><h4 class="x">  المركز</h4>
                          <p class="x">{{event.position}}</p>
                      </div>
                      <div class="col-sm-4" ><h4 class="x">لشوط </h4>
                      <p class="x">{{event.round}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">التاريخ</h4>
                      <p class="x">{{event.date}}</p></div>
                    </div>
                    <div class="row">
                      
                      <div class="col-sm-4" ><h4 class="x">النقاط</h4>
                      <p class="x">{{event.point}}</p>
                      </div>
                        <div class="col-sm-4" ><h4 class="x">التوقيت</h4>
                      <p class="x">{{event.time}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">السن</h4>
                      <p class="x">{{event.age}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-8" ><h4 class="x">رابط الفىديو</h4><hr>
                      <p class="x"><a :href="event.url">Video URL</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div><br>

              <div class="panel panel-default" style = "background-color: yellow;">
                <div class="panel-heading" style = "background-color: brown;">
                  <h4 class="panel-title">
                    <a data-toggle="collapse"  :href="'#collapse41' + user.value">
                    <div class = "row txtColor">
                        <div class=" col-sm-2 dummyInline1" ><i class="fa fa-gift"></i></div>
                        <div class="col-sm-2 dummyInline1">
                            6
                        </div>
                        
                        <div class="col-sm-8 dummyInline1" style ="text-align: right;">
                          جائزة راىد الكبري 
                        </div>
                      </div>
                      </a>
                  </h4>
                </div>
                <div :id="'collapse41' + user.value" class="panel-collapse collapse">
                <div  v-for="event in event3"  v-if="user.value ===event.value"  class="panel-body">
                    <div class="row" >
                      <div class="col-sm-4" ><h4 class="x">  المركز</h4>
                          <p class="x">{{event.position}}</p>
                      </div>
                      <div class="col-sm-4" ><h4 class="x">لشوط </h4>
                      <p class="x">{{event.round}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">التاريخ</h4>
                      <p class="x">{{event.date}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4" ><h4 class="x">النقاط</h4>
                      <p class="x">{{event.point}}</p>
                      </div>
                        <div class="col-sm-4" ><h4 class="x">التوقيت</h4>
                      <p class="x">{{event.time}}</p></div>
                        <div class="col-sm-4" ><h4 class="x">السن</h4>
                      <p class="x">{{event.age}}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-2" > </div>
                      <div class="col-sm-8" ><h4 class="x">رابط الفىديو</h4><hr>
                      <p class="x"><a :href="event.url">Video URL</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
    
  </div> 
 </div> 
</template>

<script>
import {db} from './firedatabase.js'
let messagesRef = db.ref('message')
let usersRef = db.ref('users1')
let achievementsRef = db.ref('achievements')
let event1Ref = db.ref('event1')
let event2Ref = db.ref('event2')
let event3Ref = db.ref('event3')

export default {
  name: 'HelloWorld',
  firebase: {
    message: messagesRef,
    users1: usersRef,
    achievements: achievementsRef,
    event1: event1Ref,
    event2: event2Ref,
    event3: event3Ref
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    Removee() {
      //window.location = '/archive'
      this.$router.replace('archive')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
