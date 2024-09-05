/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TasksIndexImport } from './routes/tasks.index'

// Create/Update Routes

const TasksIndexRoute = TasksIndexImport.update({
  path: '/tasks/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/tasks/': {
      id: '/tasks/'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof TasksIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ TasksIndexRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/tasks/"
      ]
    },
    "/tasks/": {
      "filePath": "tasks.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
