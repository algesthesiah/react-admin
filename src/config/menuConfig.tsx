import React from 'react'
import {RoleName} from './routeMap'
import {
  DashboardOutlined,
  FileOutlined,
  SearchOutlined,
  LockOutlined,
  ClusterOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons'

export interface IconEnmu {
  dashboard: React.ReactNode
  [propName: string]: React.ReactNode
}

export interface MenuListProps {
  path: string
  title: string
  icon?: string
  roles?: Array<RoleName>
  children?: Array<MenuListProps>
  // eslint-disable-next-line
  [propName: string]: any
}

export const iconEnmu: IconEnmu = {
  home: <HomeOutlined />,
  dashboard: <DashboardOutlined />,
  file: <FileOutlined />,
  search: <SearchOutlined />,
  lock: <LockOutlined />,
  cluster: <ClusterOutlined />,
  user: <UserOutlined />,
  setting: <SettingOutlined />,
}

const MenuList: MenuListProps[] = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'home',
    roles: ['admin', 'editor', 'guest'],
  },
  {
    path: '/permission',
    title: '权限测试',
    icon: 'lock',
    children: [
      {
        path: '/permission/explanation',
        title: '权限说明',
        roles: ['admin', 'editor'],
      },
      {
        path: '/permission/admin',
        title: 'admin 页面',
        roles: ['admin'],
      },
      {
        path: '/permission/editor',
        title: 'editor 页面',
        roles: ['admin', 'editor'],
      },
      {
        path: '/permission/guest',
        title: 'guest 页面',
        roles: ['admin', 'guest'],
      },
    ],
  },
  {
    path: '/system',
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        path: '/system/account',
        title: '账号管理',
        roles: ['admin', 'editor'],
      },
      {
        path: '/system/role',
        title: '角色管理',
        roles: ['admin', 'editor'],
      },
      {
        path: '/system/menu',
        title: '菜单管理',
        roles: ['admin', 'editor'],
      },
      {
        path: '/system/dept',
        title: '部门管理',
        roles: ['admin', 'editor'],
      },
      {
        path: '/system/changePassword',
        title: '修改密码',
        roles: ['admin', 'editor'],
      },
    ],
  },
  {
    path: '/nested',
    title: '嵌套路由',
    icon: 'cluster',
    children: [
      {
        path: '/nested/menu1',
        title: '菜单 1',
        roles: ['admin', 'editor'],
        children: [
          {
            path: '/nested/menu1/menu1-1',
            title: '菜单 1-1',
            roles: ['admin', 'editor'],
          },
          {
            path: '/nested/menu1/menu1-2',
            title: '菜单 1-2',
            roles: ['admin', 'editor'],
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                title: '菜单 1-2-1',
                roles: ['admin', 'editor'],
              },
            ],
          },
        ],
      },
    ],
  },
]

/** 公共菜单列表，无需权限即可访问 */
export const commonMenuList: MenuListProps[] = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'HomeOutlined',
  },
  {
    path: '/account',
    title: '个人页',
    icon: 'FormOutlined',
    children: [
      {
        path: '/account/center',
        title: '个人中心',
      },
      {
        path: '/account/setting',
        title: '个人设置',
      },
    ],
  },
]

export const prevCommonMenuList: MenuListProps[] = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'HomeOutlined',
  },
]

export const nextCommonMenuList: MenuListProps[] = [
  {
    path: '/account',
    title: '个人页',
    icon: 'FormOutlined',
    children: [
      {
        path: '/account/center',
        title: '个人中心',
      },
      {
        path: '/account/setting',
        title: '个人设置',
      },
    ],
  },
]

export default MenuList
