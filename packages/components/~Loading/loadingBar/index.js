/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-25 13:43:23
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-26 19:05:58
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
import Vue from "vue";
import loadingBar from "./index.vue";

let install;
let timer;
const duration = 800;

function newInstall() {
    install = new Vue({
        data() {
            return {
                percent: undefined,
                status: 'success',
                show: undefined
            }
        },
        render(h) {
            return h(loadingBar, {
                props: {
                    percent: this.percent,
                    status: this.status,
                    show: this.show
                }
            })
        },
        methods: {
            update(options = {}) {
                this.percent = options.percent;
                this.status = options.status;
                this.show = options.show;
            }
        }
    })
    if (window) {
        document.body.appendChild(install.$mount().$el)
    }
}

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function hide() {
    setTimeout(() => {
        install.update({
            show: false
        });
        setTimeout(() => {
            install.update({
                percent: 0
            });
        }, 200);
    }, duration);
}

export default {
    start() {
        if (timer) {
            return
        }
        let percent = 0;
        if (!install) {
            newInstall();
        }
        timer = setInterval(() => {
            percent += Math.floor(Math.random() * 3 + 1);
            if (percent > 95) {
                clearTimer();
            }
            install.update({
                show: true,
                percent: percent,
                status: 'success'
            })
        }, 200);
    },
    finish() {
        clearTimer();
        install.update({
            show: true,
            percent: 100,
            status: 'success'
        })
        hide()
    },
    errer() {
        clearTimer();
        install.update({
            show: true,
            percent: 100,
            status: 'errer'
        })
        hide()
    },
    updata(percent) {
        clearTimer();
        install.update({
            show: true,
            percent: percent,
            status: 'success'
        })
    },
    destroyed() {
        document.body.removeChild(install.$mount().$el)
        install.$destroyed()
    }
}