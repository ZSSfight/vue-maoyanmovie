<template>
    <nav>
        <ul>
            <router-link to="/film" active-class="zssactive" tag="li">
            <i class="iconfont icon-ziliao"></i>
            <span>电影</span>
            </router-link>
            <router-link to="/cinema" active-class="zssactive" tag="li">
            <i class="iconfont icon-luxiang"></i>
            <span>影院</span>
            </router-link>
            <router-link to="/center" active-class="zssactive" tag="li">
            <i class="iconfont icon-huiyuan"></i>
            <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 25px;
        background: lightblue;
        text-align: center;
            ul {
            display: flex;
                li {
                    border: 1px white solid;
                    flex: 1;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    i{
                        font-size: 21px ;
                    }
                    span{
                        font-size: 13px
                    }
                }
            }
    }

    .zssactive {
        color: blue;
    }
</style>
