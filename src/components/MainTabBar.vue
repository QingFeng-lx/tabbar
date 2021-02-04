<template>
    <TabBar>
        <tab-bar-item path="/home" active-color="red">
            <img slot="item-icon" src="../assets/img/tabbar/home.png">
            <img slot="item-icon-active" src="../assets/img/tabbar/home-active.png">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" active-color="red">
            <img slot="item-icon" src="../assets/img/tabbar/category.png">
            <img slot="item-icon-active" src="../assets/img/tabbar/category-active.png">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" active-color="red">
            <img slot="item-icon" src="../assets/img/tabbar/cart.png">
            <img slot="item-icon-active" src="../assets/img/tabbar/cart-active.png">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" active-color="red">
            <img slot="item-icon" src="../assets/img/tabbar/profile.png">
            <img slot="item-icon-active" src="../assets/img/tabbar/profile-active.png">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </TabBar>
</template>

<script>
    import TabBar from "./tabbar/TabBar";
    import TabBarItem from "./tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar, TabBarItem
        }
    }
</script>

<style scoped>

</style>
