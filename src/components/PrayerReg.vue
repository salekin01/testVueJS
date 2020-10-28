<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <b-container>
            <h1>Friday Prayer Registration for: الرجاء إدخال الاسم ورقم الهاتف {{getDate().toDateString()}}</h1>
            <div v-show="!showTable">
                <br>
                <div v-if="!show && !showDeregMsg">

                    <h3 style="color: red">You are successfully registered!!! </h3>


                    <h6 >you have registered for {{getTime(this.fridayReg.prayTime)}}. Coivd-19 safety instructions.  Therefore, dear brothers please keep attention for these instructions:
                        1- Please avoid gathering and making groups after the prayer in the front of the mosque
                        2- Bring your prayer's carpet with you
                        3- Wear the facemask during the prayer
                        To de-register, please consider doing here before Thursday so others may get access.
                        Thank you
                        Remember your brothers and sisters in prayer :)
                    </h6>
                    <b-button type="button" @click="deReg()" variant="danger">Deregister</b-button>
                </div>

                <div v-if="showDeregMsg">
                    <h3 style="color: red">You are de-registered. </h3>
                </div>
                <b-form v-if="show">
                    <b-form >
                        <b-input
                                :disabled="!isUserRegistered"
                                id="inline-form-input-name"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Please enter your name"
                                v-model="form.name"
                        ></b-input>
                        <br>
                        <b-input-group prepend="+49" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-input :disabled="!isUserRegistered" id="inline-form-input-username" type="number" placeholder="Please enter your mobile number" v-model="form.phoneNum"></b-input>
                        </b-input-group>
                        <br>
                    </b-form>

                    <div v-show="!isUserRegistered">
                        <b-form-group label="Please select a time slot">
                            <b-form-radio name="some-radios" v-model="form.prayTime" :disabled=isDisabled(1)  value="1">1st Prayer-  1:15pm  (Arabic) الصلاة الاولى عربي <b>[{{timeSlotCapacity[1]}}/15]</b></b-form-radio>
                            <b-form-radio name="some-radios" v-model="form.prayTime" :disabled=isDisabled(2) value="2">2nd Prayer-  2:00pm  (English) الصلاة الثانية انكليزي <b>[{{timeSlotCapacity[2]}}/15]</b></b-form-radio>
                            <b-form-radio name="some-radios" v-model="form.prayTime" :disabled=isDisabled(3) value="3">3rd Prayer-  2:45pm  (Arabic) الصلاة الثالثة عربي <b>[{{timeSlotCapacity[3]}}/15]</b></b-form-radio>
                            <b-form-radio name="some-radios" v-model="form.prayTime" :disabled=isDisabled(4) value="4">4th Prayer-  3:30pm  (English) الصلاة الرابعة انكليزي<b>[{{timeSlotCapacity[4]}}/15]</b></b-form-radio>
                        </b-form-group>
                    </div>

                    <b-button  v-show="isUserRegistered"  type="button" @click="isExist()" variant="primary">{{ isRequesting ? 'Please Wait...' : 'Continue' }}</b-button>
                    <b-spinner v-show="isRequesting" style="margin-left: 30px;margin-bottom: -5px " label="Loading..."></b-spinner>

                    <b-button v-show="!isUserRegistered" type="button" :disabled="isCapacityFull" @click="reg()" variant="danger">Registration</b-button>
                    <h5 v-show="isCapacityFull" >للأسف جميع صلوات الجمعة لتاريخ 16.10.2020 في مصلى الطلبة ممتلئة. بإمكانك الذهاب إلى
                        المسجد العربي Solbrigstraße 24, 09120 Chemnitz
                        المسجد التركي Zieschestraße 13, 09111 Chemnitz</h5>
                    <h5 v-show="isCapacityFull" > ---------------------------------------------------------------------------------------------- </h5>

                    <h5 v-show="isCapacityFull" >    Unfortunately, all Friday prayers at 16.10.2020 in the student room are full.
                        You can pray either at Arab mosque: Solbrigstraße 24, 09120 Chemnitz, or Turkish mosque: Zieschestraße 13, 09111 Chemnitz</h5>

                </b-form>
                <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            </div>

            <b-button type="button" @click="showAll()" variant="danger">:)</b-button>
            <div v-show="showTable">
                <b-table striped hover :items="allPeopele"></b-table>
            </div>
        </b-container>
    </div>

</template>

<script>
    import HeaderComponent from "../components/HeaderComponent";

    export default {
        name: "Events",
        components : {HeaderComponent},
        data() {
            return {
                isUserRegistered : true,
                isRequesting: false,
                form: {
                    name: '',
                    phoneNum: '',
                    prayTime:null,
                    registeredOn:this.getDate().getTime(),

                },
                fridayReg: null,
                timeSlotCapacity:[],
                show: true,
                showDeregMsg: false,
                isCapacityFull: false,
                showTable:false,
                allPeopele:[],
            }
        },

        methods: {
            getDate() {
                let today = new Date();
                let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+ (7 + 5 - today.getDay()) % 7);

                return nextweek;
            },
            isDisabled(number){
                if(this.timeSlotCapacity[number]>14)
                    return true;
                else
                    return false;
            },
            async isExist() {
                if(this.form.phoneNum.length>10){
                    alert("Mobile number should be 10 digit");
                    return 0;
                }
                if(this.form.phoneNum.length<10){
                    alert("Mobile number should be 10 digit");
                    return 0;
                }
                this.isRequesting = true;
                let registered = await this.axios.post("/api/prayer/isRegistered",
                    {
                        ...this.form
                    }
                );
                let totalCap = await this.axios.post("/api/prayer/seatCapacity",
                    {
                        ...this.form
                    }
                );
                totalCap=totalCap.data;
                this.timeSlotCapacity=totalCap;
                let totalReg= totalCap[1]+ totalCap[2]+ totalCap[3]+ totalCap[4];
                if(totalReg>59){
                    this.isCapacityFull=true;
                }

                registered= registered.data;
                if(registered.length>0){
                    this.fridayReg = registered[0];
                    this.show= false;
                }
                else{
                    this.isUserRegistered = false;
                }
                this.isRequesting=false;
            },

            async reg(){
                if (this.form.prayTime ===null){
                    alert("Please Select a time slot");
                    return 0;
                }

                let registered = await this.axios.post("/api/prayer/registered",
                    {
                        ...this.form
                    }
                );
                this.fridayReg={...this.form};
                this.show=false;
                alert(registered.data);

                return 0;
            },

            async deReg(){
                let registered = await this.axios.post("/api/prayer/deregister",
                    {
                        ...this.fridayReg
                    }
                );
                alert(registered.data);
                this.showDeregMsg=true;
                return 0;
            },
            async showAll(){
                this.form.name=prompt();
                this.showTable=true;
                let registered = await this.axios.post("/api/prayer/showAll",
                    {
                        ...this.form
                    }
                );
                registered=registered.data;
                this.allPeopele=registered;
                console.log(registered);
            },

            getTime(num){
                if(num==1)
                    return  "1st Prayer-  1:15pm  (Arabic)";
                else if(num==2)
                    return "2nd Prayer-  2:00pm  (English)";
                else if(num==3)
                    return "3rd Prayer-  2:45pm  (Arabic)";
                else
                    return "4th Prayer-  3:30pm  (English)";
            }

        }
    }
</script>

<style scoped>

</style>
