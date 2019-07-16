<template>
    <div class="row" id="translateFrom">
        <div class="col-md-12 col-md-offset-6">

                <form v-on:submit="translate" class="jumbotron"  id ="transform">

                    <input type="text" placeholder="请输入要翻译的文字" class="form-conctrol" v-model="translateText"  id="inputtext">
                    <select name="" id="select" v-model="Language" class="form-conctrol">
                        <option value="en">English</option>
                        <option value="ko">Korean</option>
                        <option value="ru">Russian</option>
                        <option value="ja">Janpanese</option>
                    </select>
                    <input  class="btn btn-primary" type="submit" value="翻译" id="submit">
                </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "translateFrom",
        data:function () {
            return{
                translateText:"",
                Language:""
            }
        },
        props:[
            "translateVal"
        ],
        methods: {
            translate:function (e) {
                // alert(this.translateText);
                e.preventDefault();
                this.$emit("translateto",this.translateText,this.Language);
            }

        },
        created() {
            this.Language="en"
        }
    };

</script>

<style scoped>
    #transform{
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    #inputtext{
        width: 200px;
        height: 50px;
        border-radius: 5px;
        margin-left: 20px;
    }
    #select{
        margin-left: 20px;
    }
    #submit{
        margin-left: 10px;
    }
    #exampleTextarea{
        width: 300px;

    }
   textarea{
       margin: 0 auto;
   }
</style>