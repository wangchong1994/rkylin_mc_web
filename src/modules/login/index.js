/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {

    },
    data () {
     return{
         sName:"",
         sPassword:""
     }
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        login(){

            _.ajax({
                url: '/user/login/entry',
                method: 'POST',
                data:{
                     
                },
                success: function (res) {
                    window.location.hash="/";
                }
            });
        }

    }
}