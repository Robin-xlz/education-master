import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component:
        () => import('../views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/edMaze',
        name: 'MazeView',
        component:
            () => import('../views/Maze.vue'),
        meta: {
            title: '趣味迷宫'
        }
    },
    {
        path: '/courses',
        name: 'CoursesView',
        component: () => {
            console.log('正在加载 CoursesView'); // 调试日志
            return import('../views/CoursesView.vue').catch(err => {
                console.log('加载组件失败:', err); // 捕获导入错误
            });
        } // 课程页面
    },
    // 添加其他路由
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    strict: true
})

router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.path)
    next()
})

export default router
