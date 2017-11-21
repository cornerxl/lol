/**
 * Created by xll on 2017/11/11.
 */

(function () {
    function getHeroType() {
        DD.request({
            url: '/hero/heroTypeName',
            type: 'json',
            timeout: 1000,
            successFunc: function (r) {
                var heroTypeName = r;
            },
            errorFunc: function (r) {
                console.log(r);
            },
            timeoutFunc: function (r) {
                console.log("系统超时");
            }
        });
    }
    getHeroType();

}());

