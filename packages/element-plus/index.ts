/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-26 10:16:05
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-29 14:27:09
 * @FilePath: /element-plus/packages/element-plus/index.ts
 */
import installer from './defaults'
export * from '@element-plus/components'
export * from '@element-plus/directives'
export * from '@element-plus/hooks'
export * from '@element-plus/tokens'

export { default as makeInstaller } from './make-installer'
export { default } from './defaults'

export const install = installer.install
export const version = installer.version
