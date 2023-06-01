<template>
	<div class="app">
		<el-container class="container1">
			<el-header class="header" height="100px">
				<span style="font-family: Consolas; font-size: 24px">Welcome to Spy's Website!</span>
			</el-header>
			<el-container class="container2">
				<el-aside class="aside" width="120px">
					<el-menu class="menu" default-active="1" router>
						<el-menu-item index="1"><span>忘川风华录</span></el-menu-item>
					</el-menu>
				</el-aside>
				<el-main class="main">
					<el-table class="table" :data="getData(menuActive)" :show-header="false" :stripe="true">
						<el-table-column prop="val" align="center"/>
					</el-table>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
    methods: {
        getData(idx) {
            if (idx === '1') {
                return Array(
                    {val: <el-link href="wangchuan/calculate" type="primary">数值计算器</el-link>},
                    {val: <el-link href="wangchuan.pdf" type="primary">数值计算说明文档</el-link>},
                    {val: <el-link href="mid-autumn" type="primary" disabled>辨音猜词辅助工具</el-link>},
                    {val: <el-link href="wordle" type="primary" disabled>辨音猜词辅助工具新版</el-link>},
                    {val: <el-link href="wangchuan/random" type="primary">随机概率模拟器</el-link>}
                );
            } else
                return Array();
        }
    },
    data() {
        return {
            menuActive: '1',
        }
    }
}
</script>

<style>
.app {
    height: 100%;
}

.container1 {
    height: 100%;
}

.container2 {
    height: 100%;
}

.header {
    text-align: center;
    background-color: #81e7ff;
    line-height: 100px;
}

.aside {
    text-align: center;
    line-height: 200px;
}

.menu {
    text-align: center;
    background-color: #a9eeff;
    height: 100%;
}

.main {
    text-align: center;
    background-color: #c6f7ff;
    line-height: 160px;
}

.table {
    text-align: center;
    background-color: lightcyan;
    height: 100%;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>