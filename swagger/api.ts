import request from '@/config/axios'

              // 分页获取采集数据存储信息
              export const ListCollectDatasWithStorage = params => {
                  return request({
                    url: '/collection/ListCollectDatasWithStorage',
                    method: 'get',
                    params
                  })
                }
            
              // 采集场景分配采集员
              export const allocCollectorForScene = params => {
                  return request({
                    url: '/collection/allocCollectorForScene',
                    method: 'put',
                    params
                  })
                }
            
              // 检测场景是否存在返工中的组
              export const checkHaveReworkGroup = params => {
                  return request({
                    url: '/collection/checkHaveReworkGroup',
                    method: 'get',
                    params
                  })
                }
            
              // 判断是否为采集需求人
              export const checkIsCollectDemander = params => {
                  return request({
                    url: '/collection/checkIsCollectDemander',
                    method: 'get',
                    params
                  })
                }
            
              // 检测不存在的场景ID
              export const checkNonExistSceneIDs = params => {
                  return request({
                    url: '/collection/checkNonExistSceneIDs',
                    method: 'get',
                    params
                  })
                }
            
              // 复制采集场景
              export const copyCollectScene = params => {
                  return request({
                    url: '/collection/copyCollectScene',
                    method: 'post',
                    params
                  })
                }
            
              // 复制采集任务
              export const copyCollectTask = params => {
                  return request({
                    url: '/collection/copyCollectTask',
                    method: 'post',
                    params
                  })
                }
            
              // 创建采集分类
              export const createCollectCategory = params => {
                  return request({
                    url: '/collection/createCollectCategory',
                    method: 'post',
                    params
                  })
                }
            
              // 创建采集分组
              export const createCollectGroup = params => {
                  return request({
                    url: '/collection/createCollectGroup',
                    method: 'post',
                    params
                  })
                }
            
              // 创建采集标签
              export const createCollectLabel = params => {
                  return request({
                    url: '/collection/createCollectLabel',
                    method: 'post',
                    params
                  })
                }
            
              // 创建采集场景
              export const createCollectScene = params => {
                  return request({
                    url: '/collection/createCollectScene',
                    method: 'post',
                    params
                  })
                }
            
              // 创建采集任务
              export const createCollectTask = params => {
                  return request({
                    url: '/collection/createCollectTask',
                    method: 'post',
                    params
                  })
                }
            
              // 添加分组评论
              export const createGroupComment = params => {
                  return request({
                    url: '/collection/createGroupComment',
                    method: 'post',
                    params
                  })
                }
            
              // 添加场景评论
              export const createSceneComment = params => {
                  return request({
                    url: '/collection/createSceneComment',
                    method: 'post',
                    params
                  })
                }
            
              // 创建影子模式任务
              export const createShadowTask = params => {
                  return request({
                    url: '/collection/createShadowTask',
                    method: 'post',
                    params
                  })
                }
            
              // 删除附件
              export const deleteAttachment = params => {
                  return request({
                    url: '/collection/deleteAttachment',
                    method: 'delete',
                    params
                  })
                }
            
              // 删除采集分类
              export const deleteCollectCategory = params => {
                  return request({
                    url: '/collection/deleteCollectCategory',
                    method: 'delete',
                    params
                  })
                }
            
              // 删除采集分组
              export const deleteCollectGroup = params => {
                  return request({
                    url: '/collection/deleteCollectGroup',
                    method: 'delete',
                    params
                  })
                }
            
              // 删除采集标签
              export const deleteCollectLabel = params => {
                  return request({
                    url: '/collection/deleteCollectLabel',
                    method: 'delete',
                    params
                  })
                }
            
              // 删除采集场景
              export const deleteCollectScene = params => {
                  return request({
                    url: '/collection/deleteCollectScene',
                    method: 'delete',
                    params
                  })
                }
            
              // 删除采集任务
              export const deleteCollectTask = params => {
                  return request({
                    url: '/collection/deleteCollectTask',
                    method: 'delete',
                    params
                  })
                }
            
              // 导出采集场景
              export const exportCollectScene = params => {
                  return request({
                    url: '/collection/exportCollectScene',
                    method: 'get',
                    params
                  })
                }
            
              // 导出采集场景模板
              export const exportCollectSceneTemplate = params => {
                  return request({
                    url: '/collection/exportCollectSceneTemplate',
                    method: 'get',
                    params
                  })
                }
            
              // 生成老记录的采集分组
              export const genCollectGroup = params => {
                  return request({
                    url: '/collection/genCollectGroup',
                    method: 'post',
                    params
                  })
                }
            
              // 获取废弃数据列表
              export const getAbortCollectData = params => {
                  return request({
                    url: '/collection/getAbortCollectData',
                    method: 'get',
                    params
                  })
                }
            
              // 获取分类详情
              export const getCollectCategory = params => {
                  return request({
                    url: '/collection/getCollectCategory',
                    method: 'get',
                    params
                  })
                }
            
              // 获取采集分类列表
              export const getCollectCategoryList = params => {
                  return request({
                    url: '/collection/getCollectCategoryList',
                    method: 'get',
                    params
                  })
                }
            
              // 获取标签详情
              export const getCollectLabel = params => {
                  return request({
                    url: '/collection/getCollectLabel',
                    method: 'get',
                    params
                  })
                }
            
              // 获取采集场景详情
              export const getCollectScene = params => {
                  return request({
                    url: '/collection/getCollectScene',
                    method: 'get',
                    params
                  })
                }
            
              // 获取采集任务详情
              export const getCollectTask = params => {
                  return request({
                    url: '/collection/getCollectTask',
                    method: 'get',
                    params
                  })
                }
            
              // 获取场景活动日志筛选值
              export const getSceneActivityLogFilterValue = params => {
                  return request({
                    url: '/collection/getSceneActivityLogFilterValue',
                    method: 'get',
                    params
                  })
                }
            
              // 导入采集场景
              export const importCollectScenes = params => {
                  return request({
                    url: '/collection/importCollectScenes',
                    method: 'post',
                    params
                  })
                }
            
              // 分页获取采集分组列表
              export const listCollectGroup = params => {
                  return request({
                    url: '/collection/listCollectGroup',
                    method: 'get',
                    params
                  })
                }
            
              // 分页获取采集场景列表
              export const listCollectScenes = params => {
                  return request({
                    url: '/collection/listCollectScenes',
                    method: 'get',
                    params
                  })
                }
            
              // 分页获取采集任务历史
              export const listCollectTaskHistory = params => {
                  return request({
                    url: '/collection/listCollectTaskHistory',
                    method: 'get',
                    params
                  })
                }
            
              // 分页获取采集任务列表
              export const listCollectTasks = params => {
                  return request({
                    url: '/collection/listCollectTasks',
                    method: 'get',
                    params
                  })
                }
            
              // 获取场景活动日志
              export const listSceneActivityLog = params => {
                  return request({
                    url: '/collection/listSceneActivityLog',
                    method: 'get',
                    params
                  })
                }
            
              // 同步场景采集数据
              export const syncSceneCollectData = params => {
                  return request({
                    url: '/collection/syncSceneCollectData',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集分类信息
              export const updateCollectCategory = params => {
                  return request({
                    url: '/collection/updateCollectCategory',
                    method: 'put',
                    params
                  })
                }
            
              // 上传采集数据
              export const updateCollectData = params => {
                  return request({
                    url: '/collection/updateCollectData',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集数据量数据
              export const updateCollectDataSize = params => {
                  return request({
                    url: '/collection/updateCollectDataSize',
                    method: 'put',
                    params
                  })
                }
            
              // 修改采集分组
              export const updateCollectGroup = params => {
                  return request({
                    url: '/collection/updateCollectGroup',
                    method: 'put',
                    params
                  })
                }
            
              // 修改采集分组状态
              export const updateCollectGroupStatus = params => {
                  return request({
                    url: '/collection/updateCollectGroupStatus',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集标签信息
              export const updateCollectLabel = params => {
                  return request({
                    url: '/collection/updateCollectLabel',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集场景
              export const updateCollectScene = params => {
                  return request({
                    url: '/collection/updateCollectScene',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集场景状态
              export const updateCollectSceneStatus = params => {
                  return request({
                    url: '/collection/updateCollectSceneStatus',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集任务
              export const updateCollectTask = params => {
                  return request({
                    url: '/collection/updateCollectTask',
                    method: 'put',
                    params
                  })
                }
            
              // 更新采集任务状态
              export const updateCollectTaskStatus = params => {
                  return request({
                    url: '/collection/updateCollectTaskStatus',
                    method: 'put',
                    params
                  })
                }
            
              // 更换审批人
              export const updateTaskApproval = params => {
                  return request({
                    url: '/collection/updateTaskApproval',
                    method: 'put',
                    params
                  })
                }
            
              // 补充组文件
              export const uploadGroupMoreFile = params => {
                  return request({
                    url: '/collection/uploadGroupMoreFile',
                    method: 'post',
                    params
                  })
                }
            