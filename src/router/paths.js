/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for each route
// which is lazy-loaded when the route is visited.
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

function loadComponents (view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

export default [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: loadView('Home')
  },
  {
    path: '/maintenance-local-post',
    component: loadComponents('LocalPosts/LocalMaintenancePost')
  },
  {
    path: '/maintenance-local-post/:id',
    component: loadComponents('LocalPosts/LocalMaintenancePost')
  },
  {
    path: '/plus/:id',
    name: 'RemotePlus',
    component: loadView('RemotePlus')
  },
  {
    path: '/maintenance-remote-plus',
    component: loadComponents('RemotePlus/RemotePlusMaintenance')
  },
  {
    path: '/maintenance-remote-plus/:id',
    component: loadComponents('RemotePlus/RemotePlusMaintenance')
  },
  {
    path: '/remote-post',
    name: 'remotePost',
    component: loadView('RemotePost')
  },
  {
    path: '/remote-plus',
    name: 'RemotePlus',
    component: loadView('RemotePlus')
  },
  {
    path: '/404',
    name: 'Not Found',
    component: loadView('404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
