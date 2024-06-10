import request from '@/config/axios'

export interface AliyunOSS {
  endpoint: string

}

export interface Autocode {
  root: string
  server: string
  web: string

}

export interface AwsS3 {
  bucket: string
  endpoint: string
  region: string

}

export interface CORS {
  mode: string

}

export interface CORSWhitelist {

}

export interface Captcha {

}

export interface Dcs {
  env: string // 环境信息 local 本地/test/测试/prod生产
  local: boolean // 是否本地

}

export interface DcsDingtalk {
  extend_return_id: string

}

export interface Detail {
  compareField: string // 需要比较时间的字段
  interval: string // 时间间隔
  tableName: string // 需要清理的表名

}

export interface Elastic {
  host: string
  name: string
  pwd: string

}

export interface Email {
  from: string // 收件人
  host: string // 服务器地址
  nickname: string // 昵称
  port: number // 端口
  secret: string // 密钥
  to: string // 收件人:多个以英文逗号分隔

}

export interface Excel {
  dir: string

}

export interface Habor {
  host: string

}

export interface HuaWeiObs {
  bucket: string
  endpoint: string
  path: string

}

export interface JWT {
  issuer: string // 签发者

}

export interface Ldap {
  url: string

}

export interface Local {
  path: string // 本地文件访问路径

}

export interface MetricService {
  address: string

}

export interface Mssql {
  config: string // 高级配置
  engine: string // 数据库引擎，默认InnoDB
  password: string // 数据库密码
  path: string // 服务器地址:端口
  port: string // :端口
  prefix: string // 全局表前缀，单独定义TableName则不生效
  singular: boolean // 是否开启全局禁用复数，true表示开启
  username: string // 数据库用户名

}

export interface Mysql {
  config: string // 高级配置
  engine: string // 数据库引擎，默认InnoDB
  password: string // 数据库密码
  path: string // 服务器地址:端口
  port: string // :端口
  prefix: string // 全局表前缀，单独定义TableName则不生效
  singular: boolean // 是否开启全局禁用复数，true表示开启
  username: string // 数据库用户名

}

export interface Oracle {
  config: string // 高级配置
  engine: string // 数据库引擎，默认InnoDB
  password: string // 数据库密码
  path: string // 服务器地址:端口
  port: string // :端口
  prefix: string // 全局表前缀，单独定义TableName则不生效
  singular: boolean // 是否开启全局禁用复数，true表示开启
  username: string // 数据库用户名

}

export interface Pgsql {
  config: string // 高级配置
  engine: string // 数据库引擎，默认InnoDB
  password: string // 数据库密码
  path: string // 服务器地址:端口
  port: string // :端口
  prefix: string // 全局表前缀，单独定义TableName则不生效
  singular: boolean // 是否开启全局禁用复数，true表示开启
  username: string // 数据库用户名

}

export interface Qiniu {
  bucket: string // 空间名称
  zone: string // 存储区域

}

export interface Redis {
  addr: string // 服务器地址:端口
  db: number // redis的哪个数据库
  password: string // 密码

}

export interface Server {

}

export interface SpecializedDB {
  config: string // 高级配置
  disable: boolean
  engine: string // 数据库引擎，默认InnoDB
  password: string // 数据库密码
  path: string // 服务器地址:端口
  port: string // :端口
  prefix: string // 全局表前缀，单独定义TableName则不生效
  singular: boolean // 是否开启全局禁用复数，true表示开启
  type: string
  username: string // 数据库用户名

}

export interface Storage {
  url: string // 存储地址

}

export interface System {
  addr: number // 端口值
  env: string // 环境值

}

export interface TencentCOS {
  bucket: string
  region: string

}

export interface Timer {
  spec: string // CRON表达式
  start: boolean // 是否启用
  with_seconds: boolean // 是否精确到秒

}

export interface Zap {
  director: string // 日志文件夹
  format: string // 输出
  level: string // 级别
  prefix: string // 日志前缀

}

export interface DeletedAt {
  time: string
  valid: boolean // Valid is true if Time is not NULL

}

export interface AddEventClassParam {
  auto_drive_metric?: number
  collect_labels: string
  create_at: string
  detail: string
  id: number
  is_badcase: boolean
  is_collect: boolean
  is_jira: boolean
  jira_module?: number
  priority?: number
  receiver?: string
  record_duration?: string
  record_topics: string
  seriousness?: number
  shadow_event_category?: number
  shadow_event_name?: string
  shadow_event_state?: number
  trigger_condition?: string

}

export interface AddMenuAuthorityInfo {
  authorityId: number // 角色ID

}

export interface AllocCollectorForSceneParam {
  collector_id: number // 采集员ID
  scene_ids: string // 采集场景ID列表
  task_id: number // 采集任务ID

}

export interface AppendDatasetVersionParam {
  id: number // 数据集版本ID
  note: string // 版本描述
  tag_ids: string // 标签列表

}

export interface BatchAddEventClassParam {

}

export interface BatchUpdateMarkDatasetParam {
  class_id: number // 分类ID
  ids: string // 标注数据集ID列表 ','分隔

}

export interface CarUseSeconds {
  car_num: string
  use_seconds: number

}

export interface CarUseTimeStatisticsResult {

}

export interface CasbinInReceive {
  authorityId: number // 权限id

}

export interface CasbinInfo {
  method: string // 方法
  path: string // 路径

}

export interface ChangePasswordReq {
  newPassword: string // 新密码
  password: string // 密码

}

export interface ChangeUserInfo {
  authorityIds: number[]
  enable: number // 冻结用户
  headerImg: string // 用户头像
  id: number // 主键ID
  sideMode: string // 用户侧边主题

}

export interface CheckIsCollectDemanderResult {
  is_collect_demander: boolean

}

export interface CheckNonExistCarCardsParam {
  car_cards: string

}

export interface CopyCollectSceneParam {
  id: number

}

export interface CopyCollectTaskParam {
  id: number
  skip_scene: boolean

}

export interface CopyProjectConfigParam {
  solution_id?: number // 源方案ID

}

export interface CreateCarSensor {
  brand?: number // 传感器品牌
  extend_info: string // 扩展信息
  model?: string // 传感器型号
  sensor_type?: number // 传感器类型

}

export interface CreateCollectCategoryParam {
  content: string // 分类内容
  parent_id: number // 父级ID

}

export interface CreateCollectGroupParam {
  collect_addr: string // 采集地点
  collect_car_card: string // 采集车辆车牌
  collect_date: string // 采集日期
  collect_note: string // 采集说明
  keep_old_data: number // 是否保留废弃数据
  origin_path: string // 原始路径
  scene_id: number // 场景id
  status: number // 组状态
  zros_version: string // 软件版本

}

export interface CreateCollectLabelParam {
  category_id: number // 标签分类ID
  content: string // 标签内容
  note: string // 标签备注
  support_param: boolean // 是否支持参数

}

export interface CreateCollectSceneParam {
  city: number // 省份城市
  collect_desc: string // 采集描述
  collect_num: number // 采集数量
  collect_num_note: string // 采集数量说明
  collect_type: number // 采集类型
  data_require: string // 数据要求
  group_time_require: string // 单组时长要求
  light: number // 光照条件
  location: number // 地理位置
  restrict_repeat_reason: string // 限制重复采集原因
  road: number // 路面条件
  scene_require: string // 场景要求
  scene_title: string // 场景标题
  scene_type: number // 场景类别
  scene_types: string // 场景类别列表
  task_id: number // 采集任务id
  weather: number // 采集天气

}

export interface CreateCollectTaskParam {
  algorith_require: string // 算法要求
  approver_id: number // 审批人id
  belong_project_id: number // 所属项目id
  city: number // 所属省份城市
  collect_car_id: number // 指定采集车辆ID
  collect_car_ids: string // 指定采集车辆列表
  collect_device: string // 采集设备
  collect_device_v2: string // 采集设备版本2
  collect_freq: number // 采集频次
  data_format: number
  data_formats: string // 数据格式
  demand_depart: number // 需求团队
  demand_user_name: string // 需求人
  device_note: string // 采集设备备注
  expected_date: string // 期望日期
  is_mark: boolean // 是否标注
  priority: number // 优先级
  scene_require: string // 场景要求
  storage_time: number // 保存时长
  task_class: string // 任务类别
  task_desc: string // 任务描述
  task_name: string // 任务名称
  zros_version: string // 软件版本

}

export interface CreateDatasetRecordParam {
  category: number // 数据集类别
  name: string // 数据集名称
  note: string // 数据集描述
  tag_ids: string // 标签列表

}

export interface CreateDatasetVersionParam {
  category: number // 数据集类别
  dataset_record_id: number // 所属数据集ID
  note: string // 版本描述
  previous_version_id: number // 依赖的上一个版本ID
  tag_ids: string // 标签列表
  version: string // 版本号

}

export interface CreateDcsCarBoard {
  board_type: number // 主板类型
  car_id?: number // 车辆id
  ecu_type: number // ECU类型
  ecu_version: string // ECU版本
  platform_type: number // 平台类型
  platform_version: string // 平台版本
  product_line: number // 产品线
  serial_num: string // 序列号
  wire_control: boolean // 线控是否

}

export interface CreateDcsCarInfoParam {
  belong: number // 车辆归属
  booking_limit_days: string // 车辆管理员限制预约配置
  booking_type: boolean // 预约类型
  cannot_booking_reason: string // 不可预约原因
  car_type: number // 车辆类别
  card: string // 车牌号
  card_expired_date: string // 临牌过期日期
  chief_manager_name: string // 车辆总管管理员名
  condition: string // 车况
  config_id: number // 车辆配置id
  department?: number // 所属部门
  insurance_expired_date: string // 保险过期日期
  loc?: number // 地理位置
  main_purpose: string // 主要用途
  manager_id?: number // 管理员id
  manager_name: string // 车辆分管管理员名
  model?: string // 车辆型号
  park_num: string // 车位号
  serial_num?: string // 车辆序列号
  status: number // 车辆状态
  vin?: string // 车辆vin号
  wire_control: number // 是否线控(三态布尔）

}

export interface CreateDebuggerParam {
  create_at: string
  created_by?: string
  id: number
  image?: string
  image_ver?: string
  ip: string
  operate: number
  ports: number[]
  resource_id: number
  run_state: string
  ssh_link: string
  start_time: string
  stop_time: string
  task_component_id?: number
  timeout?: number
  user_token: string
  webssh_link: string
  zros_project: string
  zros_ver: string

}

export interface CreateDriverParam {
  booking_user_names: string
  driver_manager_name: string
  driver_name: string
  is_public: boolean
  support_locs: string
  support_projects: string

}

export interface CreateDriverTask {
  driver_id: number // 不填时，默认为登陆ID
  end_time?: string // 任务结束时间
  start_time?: string // 任务开始时间
  task_note: string // 任务说明
  task_type?: number // 任务类型

}

export interface CreateEntranceParam {
  icon_key: string // 入口图标
  menu_ids: string // 菜单id列表
  name: string // 入口名称
  sort: number // 排序标记

}

export interface CreateGroupCommentParam {
  comment: string // 评论内容
  id: number // 组id

}

export interface CreateMarkClassParam {
  dir_standard: number[]
  name: string // 分类名
  parent_id: number // 父级ID

}

export interface CreateMarkDatasetParam {
  class_id: number // 分类ID
  collect_group_id: number // 采集组ID
  collect_scene_id: number // 采集场景ID
  collect_task_id: number // 采集任务ID
  data_format: number // 标注格式
  file_size: number // 文件大小
  name: string // 名称
  note: string // 描述
  pack_id: number // 标注数据集目录ID
  source: number // 数据来源
  tag_ids: string // 标签ID列表

}

export interface CreateOilCardParam {
  balance: number // 余额(单位：分)
  borrow_user_name: string // 领用人姓名
  card_manager_name: string // 加油卡管理人姓名
  card_num: string // 加油卡号
  company: number // 公司
  dep_manager_name: string // 部门负责人姓名
  manager_name: string // 行政管理人员姓名
  open_date: string // 开卡日期(不填则默认当前日期)
  open_gas_station: string // 开卡加油站
  purpose: string // 用途
  used_department: number // 使用部门

}

export interface CreateProjectConfigParam {
  board_mcu: number // 主板MCU
  board_soc: number // 主板SOC
  car_model: string // 车型
  imu: number // IMU
  project_id?: number // 项目ID
  solution_name?: string // 方案名称

}

export interface CreateProjectParam {
  collect_version: string // 采集版本
  describe: string // 项目描述
  detail: string // 项目详情
  end_date: string // 结束日期
  english_abbr: string // 英文简称
  jira_link: string // Jira链接
  jira_project: string // Jira项目
  manager_name: string // 项目负责人
  name: string // 项目名称
  official_name: string // 正式项目名称
  official_number: string // 正式项目编号
  progress: number // 项目进度
  start_date: string // 开始日期
  status: number // 项目状态
  version_name: string // 版本名称

}

export interface CreateProjectUserParam {
  authority_ids: number[]
  project_id: number // 项目ID
  user_name: string // 用户名

}

export interface CreateRechargeRecordParam {
  oil_card_id: number // 加油卡ID
  person_name: string // 充值人姓名
  recharde_note: string // 充值说明
  recharge_amount: number // 充值金额
  recharge_date: string // 充值日期

}

export interface CreateRefuelRecordParam {
  before_amount: number // 原金额
  car_card: string // 车牌
  gas_station: string // 加油站
  is_new_car: boolean // 是否为新车牌
  odometer: number // 加油是车辆里程表(公里/100)
  oil_card_id: number // 加油卡ID
  oil_price: number // 汽油单价
  person_name: string // 加油人姓名
  refuel_amount: number // 加油金额
  refuel_date: string // 加油日期
  refuel_note: string // 加油说明
  refuel_quantity: number // 加油数量(升/100)

}

export interface CreateSCMCommitCTResultParam {
  end_time: string
  id: number
  note: string
  platform: string
  project_name: string
  result: string
  start_time: string
  ut_id: number

}

export interface CreateSCMCommitParam {
  branch: string
  change_id: string
  change_num: number
  change_url: string
  ci_cost_time: number
  ci_end_time: string
  ci_start_time: string
  ci_status: string
  create_by: string
  ct_cost_time: number
  ct_count: number
  ct_status: string
  note: string
  patch_created_at: string
  patch_set: number
  repository_name: string
  reviewed_at: string
  server: string
  submitted_at: string

}

export interface CreateSCMCommitPlatformTaskParam {
  build_end_time: string
  build_start_time: string
  ci_status: string
  ct_status: string
  note: string
  platform: string
  project_name: string
  scm_commit_id: number
  ut_end_time: string
  ut_start_time: string

}

export interface CreateSCMRepositoryParam {
  name: string
  note: string
  org_key: number
  owner: string
  server: string
  status: boolean

}

export interface CreateSceneCommentParam {
  comment: string // 评论内容
  id: number // 场景id

}

export interface CreateTagHierarchyParam {
  name: string // 分组名
  parent_id: number // 父级ID

}

export interface CreateTagParam {
  approver_id: number // 审批人
  hierarchy_id: number // 分组ID
  name: string // 标签名称
  note: string // 标签描述
  source: number // 标签来源
  status: number // 标签状态
  update_status_desc: string // 状态变更描述

}

export interface CreateTaskComponentParam {
  category: string
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  module_name: string
  module_ver: string
  name: string
  runs: number
  source: string

}

export interface CreateWorkflowCaseParam {
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  name: string
  run_mode: string
  run_now: boolean
  run_progress: string
  run_state: string
  start_time: string
  stop_time: string
  timeout: number
  user_token: string
  workflow_template_id: number

}

export interface CreateWorkflowTemplateParam {
  category: string
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  name: string
  runs: number
  source: string
  timeout: number
  zros_project: string
  zros_ver: string

}

export interface DatasetSourceParam {
  exist_ok: number
  override: number
  source_id: number // 来源ID
  source_name: string // 来源名称
  source_pack_id: number // 来源存储PackID
  source_type: number // 来源类型
  target_save_path: string // 目标保存路径, /表示根路径

}

export interface DateCarUseSeconds {
  date: string

}

export interface DateDepartUseSeconds {
  date: string

}

export interface DcsCarBookingParam {
  booking_date?: string // 预约日期 YY-MM-DD 格式
  booking_user_name?: string // 预约人名
  car_id?: number // 车辆id
  drive_type: number // 驾驶任务类型
  driver_id: number // 司机id
  end?: string // 预约结束时间 HH:mm:SS 格式
  operator_id: number // 操作人ID
  project_id: number // 服务项目ID
  self_drive: boolean // 是否自驾(默认为否)
  start?: string // 预约起始时间 HH:mm:SS 格式
  subject?: string // 预约事由

}

export interface DcsFreeCarSearch {
  asset_num: string // 资产编号 支持模糊搜索
  belong: number // 车辆归属
  booking_date: string // 预约日期 YY-MM-DD 格式
  car_id: number // 车辆ID
  car_kind: number // 车辆类型
  car_type: number // 车辆类别
  card: string // 模糊搜索车牌
  card_type: number // 车牌类型
  city: number // 省份城市
  config_id: number // 项目方案ID 以前的车辆配置id
  department: number // 事业部
  end: string // 预约结束时间 HH:mm:SS 格式
  energy_type: number // 能量类型
  exact_card: string // 精确搜索车牌
  loc: number // 地点ID
  locs: string // 地点列表
  manager_id: number // 管理员id(不分区是分管管理员还是总管管理员)
  model: string // 车辆型号
  park_num: string // 车位号
  project_id: number // 项目ID
  sensor_model: string // 传感器类型 支持模糊搜索
  solution_id: number // 项目方案ID
  start: string // 预约起始时间 HH:mm:SS 格式
  status: number // 车辆状态
  vin: string // 模糊搜索vin

}

export interface DcsFreeDriverSearch {
  booking_date?: string // 预约日期 YY-MM-DD 格式
  car_id: number // 车辆ID
  end?: string // 预约结束时间 HH:mm:SS 格式
  real_user_id: number
  real_user_name: string
  start?: string // 预约起始时间 HH:mm:SS 格式

}

export interface DeleteAttachmentParam {
  id: number

}

export interface DeleteCollectGroupParam {
  id: number // 组id
  ids: string // 组ID列表

}

export interface DeleteCollectLabelParam {
  id: number

}

export interface DeleteCollectSceneParam {
  id: number

}

export interface DeleteCollectTaskParam {
  id: number

}

export interface DeleteDatasetRecordParam {
  id: number

}

export interface DeleteDatasetVersionCreateTaskParam {
  id: number

}

export interface DeleteDatasetVersionParam {
  id: number

}

export interface DeleteDcsImageParam {
  id: number

}

export interface DeleteDebuggerParam {
  id?: number

}

export interface DeleteDriverParam {
  driver_id: number

}

export interface DeleteDriverTask {
  task_id?: number // 任务ID
  user_id: number // 当前用户ID

}

export interface DeleteEntranceParam {
  id: number // 入口ID

}

export interface DeleteFileTagParam {
  file_owner: string // 文件归属
  filenames: string // 文件名列表
  pack_id: number // 文件归属方的PackID

}

export interface DeleteMarkDatasetParam {
  id: number

}

export interface DeleteOilCardParam {
  id: number

}

export interface DeleteProjectParam {
  id: number // 项目ID

}

export interface DeleteProjectUserParam {
  project_id: number
  user_id: number

}

export interface DeleteRechargeRecordParam {
  id: number

}

export interface DeleteRefuelRecordParam {
  id: number

}

export interface DeleteSCMCommitParam {
  id: number

}

export interface DeleteSCMCommitPlatformTaskParam {
  id: number

}

export interface DeleteStorageObjectParam {
  pack_id: number
  pack_type: string
  save_path: string

}

export interface DeleteTagHierarchyParam {
  approver_id: number // 审批人
  id: number
  update_status_desc: string // 状态变更说明

}

export interface DeleteTagParam {
  approver_id: number // 审批人
  id: number
  update_status_desc: string // 状态变更描述

}

export interface DeleteTaskComponentParam {
  id: number

}

export interface DeleteWorkflowCaseParam {
  id?: number

}

export interface DeleteWorkflowTemplateParam {
  id?: number

}

export interface DepartUseSeconds {
  depart_name: string
  use_seconds: number

}

export interface DepartUseTimeStatisticsResult {

}

export interface DeviceInfo {
  device_type: string // 传感器类型ID(mcu,soc,传感器类型ID字符串化)

}

export interface DevicePosInfo {
  device_ids: number[]
  pos: number // 传感器位置ID =9999 代表任意位置

}

export interface DownloadFileParam {
  file_id: string
  filename: string
  openConversation_id: string
  space_id: string
  union_id: string

}

export interface ExtendBookingRecordParam {
  booking_id?: number // 预约id
  end: string // 预约结束时间 HH:mm:SS 格式
  ext_time: number // 预约延长时间 单位(分钟)

}

export interface FindSolutionParam {
  solution_id?: number // 方案ID

}

export interface FixMarkDatasetDirParam {
  fix_num: number
  id: number
  ids: string

}

export interface GenCollectGroupParam {
  scene_ids: string // 场景id列表

}

export interface GetAllDriverListParam {
  is_all_drivers: boolean

}

export interface GetAuthorityId {
  authorityId: number // 角色ID

}

export interface GetByCategory {
  cate: number // 类型 0:全量 1:只看我添加的
  keyword: string // 关键字
  name: string // 用户名/昵称 模糊匹配
  page: number // 页码
  pageSize: number // 每页大小
  role: number // 角色ID

}

export interface GetById {
  id?: number // 主键ID

}

export interface GetCarStatisticsResult {

}

export interface GetCarUseStatResult {

}

export interface GetCarsByConfigParam {
  collect_device: string // 采集设备信息
  collect_task_id: number // 采集任务id
  only_flash_bot: number // 只选择充电小车

}

export interface GetCollectHistoryStatisticsResult {

}

export interface GetCollectStatisticsResult {

}

export interface GetDebuggerParam {
  id?: number

}

export interface GetDriverStatisticResult {

}

export interface GetFrontConfigResult {
  content: string

}

export interface GetGlobalStatResult {
  average_car_rate: number // 平均利用率(乘以100后的百分比数值)
  total_cars: number // 车辆总数
  total_managers: number // 管理员总数
  total_oil_cards: number // 油卡总数

}

export interface GetProjectCarStatisticsResult {

}

export interface GetTaskComponentParam {
  id: number

}

export interface GetWorkflowBatchSSHParam {
  id?: number

}

export interface GetWorkflowTemplateParam {
  id: number

}

export interface GetZMClassesResult {
  classes: string[]

}

export interface IdsReq {
  ids?: number[]

}

export interface ImportCollectScenesParam {
  overwrite: boolean // 是否覆盖
  task_id: number // 采集任务ID

}

export interface ImportSCMRepositoryParam {

}

export interface ImportSysDictionaryParam {

}

export interface ImportSysFieldsDefineParam {

}

export interface ImportTagsParam {
  approver_id: number // 审批人
  remove_all: boolean // 移除之前的所有数据
  update_status_desc: string // 状态变更描述

}

export interface InitDB {
  dbName?: string // 数据库名
  dbType: string // 数据库类型
  host: string // 服务器地址
  password: string // 数据库密码
  port: string // 数据库连接端口
  userName?: string // 数据库用户名

}

export interface ListAllFilesParam {
  openConversation_id: string
  space_id: string
  union_id: string

}

export interface ListImagesParam {
  keyword: string // 关键字
  page: number // 页码
  pageSize: number // 每页大小

}

export interface ListTaskComponentsParam {
  category: string
  created_by: string
  keyword: string // 关键字
  page: number // 页码
  pageSize: number // 每页大小
  source: string

}

export interface ListUserWorkspacesParam {
  union_id: string

}

export interface Login {
  captcha: string // 验证码
  captchaId: string // 验证码ID
  password: string // 密码
  username: string // 用户名

}

export interface MessageInfo {
  content?: string
  message_type?: string
  receiver?: string
  title?: string

}

export interface ModifyCarBookingParam {
  booking_id?: number // 预约id
  drive_type: number // 驾驶任务类型
  driver_id: number // 司机id
  project_id: number // 服务项目ID
  self_drive: boolean // 是否自驾(默认为否)
  subject: string // 预约事由

}

export interface ModifyDriverTask {
  driver_id: number // 司机ID
  end_time: string // 任务结束时间
  id?: number // 任务ID
  start_time: string // 任务开始时间
  task_id?: number // 任务ID
  task_note: string // 任务说明
  task_type: number // 任务类型

}

export interface PageInfo {
  keyword: string // 关键字
  page: number // 页码
  pageSize: number // 每页大小

}

export interface ProjectUser {
  authority_groups: number[]

}

export interface ReceiveCallBackParam {
  corId: string
  extension: string
  outTrackId: string
  userId: string
  value: string

}

export interface ReceiveUserMessageParam {
  atUsers: string[]
  chatbotCorpId: string // 加密的机器人所在的企业corpId
  chatbotUserId: string // 加密的机器人ID
  content: string // 其余消息的消息内容
  conversationId: string // 会话ID
  conversationTitle: string // 群聊时才有的会话标题
  conversationType: string // 1单聊 2群聊
  createAt: number // 消息的时间戳，单位毫秒
  isAdmin: boolean // 是否是管理员
  isInAtList: boolean // 是否在@列表中
  msgId: string // 加密的消息ID
  msgType: string // 消息类型
  senderCorpId: string // 企业内部群有的发送者当前群的企业corpId
  senderId: string // 发送者ID
  senderNick: string // 发送者昵称
  senderStaffId: string // 企业内部群中@该机器人的成员userid
  sessionWebhook: string // 当前会话的Webhook地址
  sessionWebhookExpiredTime: number // 当前会话的Webhook地址过期时间
  text: string // 文本消息的消息内容

}

export interface RecordDatasetFilesOperateParam {
  dataset_id: number // 数据集ID
  dataset_type: string // 通file_owner
  file_paths: string // 添加的文件信息,分隔

}

export interface RecoverCarInfoParam {
  id?: number // 车辆id

}

export interface RefreshTaskLogParam {
  from_op?: string
  from_time?: string
  keyword: string
  order: string
  tag?: string
  to_op?: string
  to_time?: string

}

export interface RefreshWorkflowBatchParam {
  id?: number

}

export interface Register {
  authorityId: string
  authorityIds: string
  headerImg: string
  userName: string

}

export interface ReleaseDatasetVersionParam {
  id: number

}

export interface RollBack {
  deleteTable: boolean // 是否删除表
  id: number // 主键ID

}

export interface SavePathInfo {
  file_type: string // 文件类型, 取值为file或者dir
  save_path: string // 保存路径
  target_save_path: string // 目标保存路径, /表示根路径

}

export interface SearchApiParams {
  apiGroup: string // api组
  createdAt: string // 创建时间
  desc: boolean // 排序方式:升序false(默认)|降序true
  description: string // api中文描述
  id: number // 主键ID
  keyword: string // 关键字
  method: string // 方法:创建POST(默认)|查看GET|更新PUT|删除DELETE
  orderKey: string // 排序
  page: number // 页码
  pageSize: number // 每页大小
  path: string // api路径

}

export interface SearchCarSensor {
  brand: number // 传感器品牌
  created_by: number // 创建人
  end_created_at: string // 创建结束时间
  keyword: string // 关键字
  model_like: string // 传感器型号,支持模糊搜索
  page: number // 页码
  pageSize: number // 每页大小
  sensor_type: number // 传感器类型
  start_created_at: string // 创建开始时间

}

export interface SendUserMessageParam {
  app_key: string // 发送机器人的app_key 默认为盘古机器人
  app_secret: string // 发送机器人的app_secret 默认为盘古机器人
  content: string // 消息体 支持Markdown 格式
  robot_code: string // 发送机器人的robot_code 默认为盘古机器人
  title: string // 消息标题
  user_name: string // 接收用户名

}

export interface SensorItem {
  sensor_id?: number // 传感器id
  sensor_num?: number // 传感器数量
  sensor_pos: number // 传感器位置

}

export interface SetFrontConfigParam {
  content: string

}

export interface SetUserAuth {
  authorityId: number // 角色ID

}

export interface SetUserAuthorities {
  authorityIds: number[]
  id: number

}

export interface SimpleClaims {
  authority_id: number
  authority_ids: number[]
  buffer_time: number
  id: number
  nickname: string
  type: number
  username: string
  uuid: string

}

export interface StartWorkflowCaseParam {
  id?: number

}

export interface StopWorkflowBatchsParam {
  ids?: number[]

}

export interface StopWorkflowCaseParam {
  id?: number

}

export interface StringValue {
  name: string
  value: number

}

export interface SyncSceneCollectDataParam {
  dst_scene_ids: string // 同步的目标场景ID列
  src_scene_id: number // 同步的源场景ID

}

export interface SysAuthorityBtnReq {
  authorityId: number
  menuID: number
  selected: number[]

}

export interface SysAutoHistory {
  keyword: string // 关键字
  page: number // 页码
  pageSize: number // 每页大小

}

export interface TagsAndHierarchiesResult {

}

export interface UpdateApprovalTaskParam {
  id: number
  status: number
  update_status_desc: string // 状态变更描述

}

export interface UpdateCarConfigParam {
  car_id?: number // 车辆id
  config_id?: number // 配置id

}

export interface UpdateCarSensorParam {
  brand: number // 传感器品牌
  extend_info: string // 扩展信息
  model: string // 传感器型号
  sensor_id?: number // 传感器id

}

export interface UpdateCollectCategoryParam {
  content: string // 分类内容
  id: number

}

export interface UpdateCollectDataParam {
  collect_car_id: number // 采集车辆ID
  is_part_data: boolean // 是否是部分数据
  pack_id: number
  scene_id: number // 采集场景ID
  scene_ids: string // 采集场景ID列表
  upload_date: string // 采集日期
  upload_note: string // 采集说明
  upload_zros_version: string // 上传的zros信息
  uploaded_num: number // 已上传组数
  uploaded_size: number // 已上传数据量

}

export interface UpdateCollectGroupParam {
  collect_addr: string // 采集地点
  collect_car_card: string // 采集车辆车牌
  collect_date: string // 采集日期
  collect_note: string // 采集说明
  id: number // 组id
  keep_old_data: number // 是否保留废弃数据
  origin_path: string // 原始路径
  status: number // 组状态
  zros_version: string // 软件版本

}

export interface UpdateCollectGroupStatusParam {
  dest_status: number // 要变更到的目标状态
  dev: boolean // 状态变更后门
  id: number // 组id
  ids: string // 组ID列表
  operate_type: number // 操作类型
  update_status_desc: string // 状态变更说明

}

export interface UpdateCollectLabelParam {
  content: string // 分类内容
  id: number

}

export interface UpdateCollectSceneParam {
  city: number // 省份城市
  collect_desc: string // 采集描述
  collect_num: number // 采集组数
  collect_num_note: string // 采集数量说明
  collect_type: number // 采集类型
  data_require: string // 数据要求
  group_time_require: string // 单组时长要求
  id: number
  light: number // 光照条件
  location: number // 地理位置
  restrict_repeat_reason: string // 限制重复采集原因
  road: number // 路面条件
  scene_require: string // 场景要求
  scene_title: string // 场景标题
  scene_type: number // 场景类别(已废弃)
  scene_types: string // 场景类别列表
  uploaded_num: number // 已上传组数
  weather: number // 采集天气

}

export interface UpdateCollectSceneStatusParam {
  dest_status: number // 要变更到的目标状态
  dev: boolean
  id: number // 场景ID
  ids: string // 场景IDs
  update_status_desc: string // 状态变更说明

}

export interface UpdateCollectTaskParam {
  algorith_require: string // 算法要求
  approver_id: number // 审批人id
  belong_project_id: number // 所属项目id
  city: number // 所属省份城市
  collect_car_id: number // 指定采集车辆ID
  collect_device: string // 采集设备
  collect_device_v2: string // 采集设备V2
  collect_freq: number // 采集频次
  data_format: number
  data_formats: string // 数据格式
  demand_depart: number // 需求团队
  device_note: string
  expected_date: string // 期望日期
  id: number // 采集任务id
  is_mark: boolean // 是否标注
  plan_finish_date: string // 计划完成日期
  priority: number // 优先级
  scene_require: string // 场景要求
  storage_time: number // 保存时长
  task_class: string // 任务类别
  task_desc: string // 任务描述
  task_name: string // 任务名称
  zros_version: string // 软件版本

}

export interface UpdateCollectTaskStatusParam {
  dest_status: number // 要变更到的目标状态
  dev: boolean
  id: number // 任务ID
  plan_finish_date: string // 计划完成日期
  update_status_desc: string // 状态变更说明

}

export interface UpdateDatasetRecordParam {
  id: number
  name: string
  note: string

}

export interface UpdateDatasetVersionParam {
  id: number
  note: string
  tag_ids: string

}

export interface UpdateDcsCarBoard {
  board_type: number // 主板类型
  car_id?: number // 车辆id
  ecu_type: number // ECU类型
  ecu_version: string // ECU版本
  platform_type: number // 平台类型
  platform_version: string // 平台版本
  product_line: number // 产品线
  serial_num: string // 序列号
  wire_control: boolean // 线控是否

}

export interface UpdateDcsCarInfoParam {
  asset_num: string // 资产编号
  belong: number // 车辆归属
  booking_limit_days: string // 车辆管理员限制预约配置
  booking_type: number // 预约类型
  calibrate_time: string // 标定时间
  cannot_booking_reason: string // 不可预约原因
  car_kind: number // 车辆类型
  car_type: number // 车辆类别
  card: string // 车牌号
  card_expired_date: string // 临牌过期日期
  card_type: number // 车牌类型
  chief_manager_name: string // 车辆总管管理员名
  city: number // 省份城市
  condition: string // 车况
  config_id: number // 配置ID
  department: number // 事业部
  energy_type: number // 能量类型
  id?: number // 车辆id
  insurance_expired_date: string // 保险过期日期
  loc: number // 地理位置
  main_purpose: string // 主要用途
  manager_id: number // 管理员id
  manager_name: string // 车辆分管管理员名
  model: string // 车辆型号
  park_num: string // 车位号
  serial_num: string // 车辆序列号
  status: number // 车辆状态
  status_note: string // 车辆状态备注
  vin: string // 车辆vin号
  wire_control: number // 是否线控(三态布尔）

}

export interface UpdateDcsCarSensorsParam {
  car_id?: number // 车辆id
  delete_sensor_ids: number[]

}

export interface UpdateDriverParam {
  booking_user_names: string
  driver_id: number
  driver_manager_name: string
  is_public: boolean
  support_locs: string
  support_projects: string

}

export interface UpdateEntranceParam {
  icon_key: string // 入口图标
  id: number // 入口ID
  menu_ids: string // 菜单id列表
  name: string // 入口名称
  sort: number // 排序标记

}

export interface UpdateFileTagParam {
  file_create_time: number // 文件创建时间
  file_owner: string // 文件归属
  file_path: string // 文件路径
  file_size: number // 文件大小
  pack_id: number // 文件归属方的PackID
  tag_ids: string // 文件的标签

}

export interface UpdateMaintainCertParam {
  id: number

}

export interface UpdateMarkClassParam {
  annotated_format: string // 标注格式
  dir_standard: number[]
  id: number // 分类ID
  name: string // 分类名

}

export interface UpdateMarkDatasetParam {
  collect_group_id: number // 采集组ID
  collect_scene_id: number // 采集场景ID
  collect_task_id: number // 采集任务ID
  data_format: number // 标注格式
  file_change_size: number // 文件大小改变量
  file_size: number // 文件大小
  id: number
  name: string // 名称
  note: string // 描述
  pack_id: number // 标注数据集目录ID
  source: number // 数据来源
  tag_ids: string // 标签ID列表

}

export interface UpdateOilCardParam {
  borrow_user_name: string // 领用人姓名
  card_manager_name: string // 加油卡管理人姓名
  card_num: string // 加油卡号
  company: number // 公司
  dep_manager_name: string // 部门负责人姓名
  id: number
  manager_name: string // 行政管理人员姓名
  open_gas_station: string // 开卡加油站
  purpose: string // 用途
  used_department: number // 使用部门

}

export interface UpdateProjectConfigParam {
  board_mcu: number // 主板MCU
  board_soc: number // 主板SOC
  car_model: string // 车型
  imu: number // IMU
  project_id: number // 项目ID
  solution_id?: number // 方案ID
  solution_name: string // 方案名称

}

export interface UpdateProjectParam {
  collect_version: string // 采集版本
  describe: string // 项目描述
  detail: string // 项目详情
  end_date: string // 结束日期
  english_abbr: string // 英文简称
  id: number // 项目ID
  jira_link: string // Jira链接
  jira_project: string // Jira项目
  name: string // 项目名称
  official_name: string // 正式项目名称
  official_number: string // 正式项目编号
  progress: number // 项目进度
  start_date: string // 开始日期
  status: number // 项目状态
  version_name: string // 版本名称

}

export interface UpdateProjectSensorConfigPram {
  solution_id?: number // 方案id

}

export interface UpdateProjectUserParam {
  authority_ids: number[]
  project_id: number // 项目ID
  user_id: number // 用户ID

}

export interface UpdateRechargeRecordParam {
  id: number
  recharde_note: string // 充值说明
  recharge_amount: number // 充值金额
  recharge_date: string // 充值日期

}

export interface UpdateRefuelRecordParam {
  before_amount: number // 原金额
  car_card: string // 车牌
  gas_station: string // 加油站
  id: number // 记录ID
  is_new_car: boolean // 是否为新车牌
  odometer: number // 加油是车辆里程表(公里/100)
  oil_price: number // 汽油单价
  refuel_amount: number // 加油金额
  refuel_date: string // 加油日期
  refuel_note: string // 加油说明
  refuel_quantity: number // 加油数量(升/100)

}

export interface UpdateSCMCommitParam {
  branch: string
  change_id: string
  change_num: number
  change_url: string
  ci_cost_time: number
  ci_end_time: string
  ci_start_time: string
  ci_status: string
  create_by: string
  ct_cost_time: number
  ct_count: number
  ct_status: string
  id: number
  note: string
  patch_created_at: string
  patch_set: number
  repository_name: string
  reviewed_at: string
  server: string
  submitted_at: string

}

export interface UpdateSCMCommitPlatformTaskParam {
  build_end_time: string
  build_start_time: string
  ci_status: string
  ct_status: string
  id: number
  note: string
  platform: string
  project_name: string
  scm_commit_id: number
  ut_end_time: string
  ut_start_time: string

}

export interface UpdateSCMRepositoryParam {
  id: number
  name: string
  note: string
  org_key: number
  owner: string
  server: string
  status: boolean

}

export interface UpdateTagHierarchyParam {
  approver_id: number // 审批人
  id: number // 分组ID
  name: string // 分组名
  parent_id: number // 父级ID
  update_status_desc: string // 状态变更说明

}

export interface UpdateTagHierarchyStatusParam {
  approver_id: number // 审批人
  id: number // 分组ID
  operate: string // 状态更新操作
  task_id: number // 审批任务ID
  task_status: number // 审批任务状态
  update_status_desc: string // 状态变更说明

}

export interface UpdateTagParam {
  approver_id: number // 审批人
  hierarchy_id: number // 分组ID
  id: number // ID
  name: string // 标签名称
  note: string // 标签描述
  reason: string // 变更原因
  update_status_desc: string // 状态变更描述

}

export interface UpdateTagStatusParam {
  approver_id: number // 审批人
  dev: boolean
  id: number // 标签ID
  operate: string // 状态更新操作
  task_id: number // 审批任务ID
  task_status: number // 审批任务状态
  update_status_desc: string // 状态变更说明

}

export interface UpdateTaskApprovalParam {
  approver_id: number // 审批人id
  id: number // 任务ID

}

export interface UploadGroupMoreFileParam {
  content: string // 补充信息
  id: number // 组ID

}

export interface UploadMaintainCertParam {
  car_id: number // 车辆ID

}

export interface WebhookWorkflowBatchParam {

}

export interface Email {
  body: string // 邮件内容
  subject: string // 邮件标题
  to: string // 邮件发送给谁

}

export interface LoginResponse {
  expiresAt: number
  token: string

}

export interface PageResult {
  page: number
  pageSize: number
  total: number

}

export interface PolicyPathResponse {

}

export interface Response {
  code: number
  msg: string

}

export interface SysAPIListResponse {

}

export interface SysAPIResponse {

}

export interface SysAuthorityBtnRes {
  selected: number[]

}

export interface SysAuthorityCopyResponse {
  oldAuthorityId: number // 旧角色ID

}

export interface SysAuthorityResponse {

}

export interface SysBaseMenuResponse {

}

export interface SysBaseMenusResponse {

}

export interface SysCaptchaResponse {
  captchaId: string
  captchaLength: number
  openCaptcha: boolean
  picPath: string

}

export interface SysConfigResponse {

}

export interface SysMenusResponse {

}

export interface SysUserResponse {

}

export interface AbortCollectGroup {
  create_at: string // 创建时间
  group_id: number
  id: number // 主键ID
  update_at: string // 更新时间

}

export interface AddEventClassResult {
  create: boolean

}

export interface AttachmentInfo {
  create_at: string // 创建时间
  create_by: number // 创建者
  file_size: number
  file_type: string
  filename: string
  id: number // 主键ID
  owner_id: number
  owner_type: string
  pack_id: number
  pack_type: string
  save_path: string
  update_at: string // 更新时间

}

export interface BaseDcsCarInfo {
  booking_type: number // 1 当天预约 2 自由预约  3 不可预约
  card: string // 车牌号
  create_at: string // 创建时间
  id: number // 主键ID
  model: string // 车辆型号
  update_at: string // 更新时间

}

export interface BatchApprovalTask {
  approver_id: number
  content: string
  create_at: string // 创建时间
  desc: string
  id: number // 主键ID
  operate_type: number
  status: number
  update_at: string // 更新时间

}

export interface BatchDriversTaskResult {
  offline_task_id: number // 离线任务ID

}

export interface CarMaintainCert {
  car_id: number
  create_at: string // 创建时间
  create_by: number
  id: number // 主键ID
  update_at: string // 更新时间

}

export interface CollectCategory {
  content: string
  create_at: string // 创建时间
  id: number // 主键ID
  level: number
  parent_id: number
  update_at: string // 更新时间

}

export interface CollectData {
  create_at: string // 创建时间
  id: number // 主键ID
  pack_id: number
  scene_id: number
  task_id: number
  update_at: string // 更新时间
  upload_date: string

}

export interface CollectGroup {
  approver_id: number
  back_count: number
  collector_id: number
  create_at: string // 创建时间
  demand_user_id: number
  group_name: string
  group_serial: number
  id: number // 主键ID
  origin_path: string
  scene_id: number
  status: number
  task_id: number
  update_at: string // 更新时间

}

export interface CollectLabel {
  categories_info: string
  category_id: number
  categrory_ids: string // 分类列表ids
  content: string
  create_at: string // 创建时间
  label_id: number // 主键ID
  note: string
  support_param: boolean
  update_at: string // 更新时间

}

export interface CollectLabelOwnerRel {
  create_at: string // 创建时间
  id: number // 主键ID
  label_param: string // 传感器位置l
  owner_id: number
  owner_type: string
  update_at: string // 更新时间

}

export interface CollectReport {
  car_card: string
  collect_addr: string
  collect_car_id: number
  collect_note: string
  collect_time: string
  zros_version: string

}

export interface CollectScene {
  approver_id: number
  back_count: number
  city: number
  collect_car_id: number
  collect_desc: string
  collect_num: number
  collect_num_note: string
  collect_type: number
  collector_id: number
  create_at: string // 创建时间
  data_require: string
  demand_user_id: number
  group_time_require: string
  id: number // 主键ID
  light: number
  location: number
  pack_id: number
  restrict_repeat_reason: string
  road: number
  scene_kind: number
  scene_title: string
  scene_type: number
  scene_types: string
  status: number
  task_id: number
  update_at: string // 更新时间
  upload_note: string
  upload_zros_version: string
  uploaded_num: number
  uploaded_size: number
  weather: number

}

export interface CollectSceneHistory {
  create_at: string // 创建时间
  event_type: string
  group_serial: number
  id: number // 主键ID
  note: string
  scene_id: number
  update_at: string // 更新时间

}

export interface CollectTask {
  accepted_group_num: number // 验收的分组数
  accepted_scene_num: number // 验收场景数
  algorith_require: string
  allocate_all_scenes: boolean // 非数据库字段
  approval_time: string
  approver_id: number
  belong_project_id: number // 基础信息
  city: number
  collect_car_id: number
  collect_device: string // 采集设备
  collect_device_v2: string
  collect_freq: number
  create_at: string // 创建时间
  data_format: number // 数据要求
  data_formats: string
  demand_depart: number
  demand_user_id: number
  device_note: string
  expected_date: string
  id: number // 主键ID
  is_mark: boolean
  plan_finish_date: string // 计划完成日期
  priority: number
  status: number
  storage_time: number
  task_class: string
  task_desc: string
  task_kind: number
  task_name: string
  update_at: string // 更新时间
  upload_group_num: number // 上传的分组数
  upload_scene_num: number // 上传场景数
  uploaded_size: number // 已上传数据量
  valid_group_num: number // 有效的总分组数 (总数 - 废弃)
  valid_scene_num: number // 有效的场景总数 (总数-废弃)
  zros_version: string

}

export interface CollectTaskHistory {
  create_at: string // 创建时间
  event_type: string
  id: number // 主键ID
  note: string
  scene_id: number
  task_id: number
  update_at: string // 更新时间

}

export interface CostTimeDataItem {
  avg: number
  count: number
  date: string
  max: number
  min: number
  organization_key: number
  organization_name: string
  repository_id: number
  repository_name: string
  server: string

}

export interface DataItem {
  count: number
  date: string
  organization_key: number
  organization_name: string
  repository_id: number
  repository_name: string
  server: string

}

export interface DatasetAnnotationCategory {
  annotation_format: string
  annotation_scene: string
  attributes: string
  create_at: string // 创建时间
  id: number // 主键ID
  name: string
  shape: string
  type: string
  update_at: string // 更新时间

}

export interface DatasetFrame {
  annotation_format: string
  annotation_scene: string
  calib_file: string
  create_at: string // 创建时间
  dataset_name: string
  dr_file: string
  file_height: number
  file_meta_uuid: string
  file_width: number
  id: number // 主键ID
  key_file: string
  label_file: string
  pack_id: number
  pack_type: string
  parse_info_id: number
  related_image_files: string
  related_lidar_files: string
  related_visual_files: string
  source: number
  update_at: string // 更新时间
  version: string

}

export interface DatasetFrameCategory {
  category_id: number
  create_at: string // 创建时间
  frame_id: number
  id: number // 主键ID
  parse_info_id: number
  total_num: number
  update_at: string // 更新时间

}

export interface DatasetHistory {
  create_at: string // 创建时间
  dataset_id: number
  dataset_type: string // 包含标注数据/数据集/数据集版本
  event_type: string
  id: number // 主键ID
  note: string
  update_at: string // 更新时间

}

export interface DatasetInfo {
  desc: string
  id: number
  inner_name: string
  name: string
  pack_id: number

}

export interface DatasetParseAnnotationInfo {
  create_at: string // 创建时间
  created_by: number
  id: number // 主键ID
  note: string
  parse_at: string
  source_id: number
  source_name: string
  source_pack_id: number
  source_type: number
  status: number
  update_at: string // 更新时间

}

export interface DatasetRecord {
  create_at: string // 创建时间
  id: number // 主键ID
  name: string
  note: string
  update_at: string // 更新时间

}

export interface DatasetSource {
  create_at: string // 创建时间
  exist_ok: number
  id: number // 主键ID
  override: number
  save_path_list: string // 待保存的来源文件列表，如果包含全部文件，则为["/*"]
  source_id: number // 来源ID
  source_name: string // 来源名称
  source_pack_id: number // 来源存储PackID
  source_type: number // 来源类型
  target_save_path: string // 目标保存路径, /表示根路径
  update_at: string // 更新时间

}

export interface DatasetStatisticsResult {

}

export interface DatasetVersion {
  category: number
  create_at: string // 创建时间
  dataset_record_id: number
  file_size: number
  id: number // 主键ID
  note: string
  pack_id: number
  previous_version_id: number
  release_at: string
  update_at: string // 更新时间
  version: string

}

export interface DatasetVersionCreateTask {
  create_at: string // 创建时间
  dataset_version_id: number
  failure_count: number
  failure_size: number
  id: number // 主键ID
  msg: string
  start_time: string
  status: number
  stop_time: string
  storage_sync_task_id: number
  success_count: number
  success_size: number
  total_count: number
  total_size: number
  update_at: string // 更新时间

}

export interface DatasetVersionCreateTaskResult {
  create_at: string // 创建时间
  dataset_record_name: string // 数据集名称
  dataset_version_id: number // 数据集版本ID
  dataset_version_note: string // 数据集版本描述
  dataset_version_version: string // 数据集版本号
  failure_count: number
  failure_size: number
  id: number // 主键ID
  msg: string
  start_time: string
  status: number
  stop_time: string
  storage_sync_task_id: number
  success_count: number
  success_size: number
  total_count: number
  total_size: number
  update_at: string // 更新时间

}

export interface DatasetVersionResult {
  category: number
  create_at: string // 创建时间
  dataset_record_id: number
  dataset_record_name: string
  file_size: number
  id: number // 主键ID
  mount_path: string
  note: string
  pack_id: number
  previous_version_id: number
  release_at: string
  update_at: string // 更新时间
  version: string

}

export interface DateNumber {
  date: string
  number: number

}

export interface DateNumberList {

}

export interface DateNumberPack {

}

export interface DcsCarBookingRecord {
  cancel_reason: string // 取消原因
  car_id: number // 车辆id
  create_at: string // 创建时间
  created_by: number // 预约人
  end_time: string // 预约结束时间 HH:mm:SS 格式
  id: number // 主键ID
  info: string // 预约用途
  operator_id: number // 预约记录实际操作人
  order_date: string // 预约日期
  project_id: number // 项目名称
  real_end_time: string // 实际结束时间 HH:mm:SS 格式
  self_drive: boolean // 是否自驾
  start_time: string // 预约起始时间 HH:mm:SS 格式
  status: number
  update_at: string // 更新时间

}

export interface DcsCarBookingSchedule {

}

export interface DcsCarBookingScheduleInfo {
  book_span: number // 预约跨度
  book_status: number // 预约状态
  booking_id: number // 预约记录id
  can_cancel: boolean // 是否可取消预约
  end_time: string // 预约结束时间 HH:mm:SS 格式
  id: number // 主键ID
  is_end: boolean // 是否是结束时间
  is_start: boolean // 是否是预约起始时间
  start_time: string // 预约起始时间 HH:mm:SS 格式
  task_type: number // 预约任务类型
  used: boolean // 该时间段是否被预约
  user_id: number // 预约人id

}

export interface DcsCarInfo {
  asset_num: string
  belong: number
  booking_limit_days: number[]
  booking_type: number
  calibrate_time: string
  can_booking: boolean
  cannot_booking_reason: string
  car_kind: number
  car_type: number
  card: string
  card_expired_date: string
  card_type: number
  chief_manager_id: number
  chief_manager_name: string
  city: number
  condition: string
  create_at: string // 创建时间
  create_by: number
  delete_reason: string
  department: number
  energy_type: number
  id: number // 主键ID
  insurance_expired_date: string
  is_card_expired: boolean
  last_maintenance_time: string
  loc: number
  main_purpose: string
  manager_id: number
  manager_name: string
  model: string
  park_num: string
  refuel_count: number
  serial_num: string
  status: number
  status_note: string
  status_time: string
  update_at: string // 更新时间
  vin: string
  wire_control: number

}

export interface DcsCarSensor {
  brand: number // 传感器供应商
  create_at: string // 创建时间
  extend_info: string // 扩展信息
  id: number // 主键ID
  is_quoted: boolean // 是否被引用
  model: string // 传感器型号
  sensor_type: number // 传感器类型
  update_at: string // 更新时间

}

export interface DcsDriverTask {
  create_at: string // 创建时间
  id: number // 主键ID
  operator_id: number
  task_end: string // 任务结束时间
  task_note: string // 任务说明
  task_real_end_time: string // 任务实际结束时间
  task_span: number // 任务跨度
  task_start: string // 任务开始时间
  task_status: number // 任务状态
  task_type: number // 任务类型
  update_at: string // 更新时间

}

export interface DcsImageInfo {
  content: number[]
  create_at: string // 创建时间
  create_by: number // 创建者
  id: number // 主键ID
  name: string
  owner_id: number
  owner_type: string
  size: number
  update_at: string // 更新时间

}

export interface DcsSolutionConfig {
  board_mcu: number
  board_soc: number
  car_model: string
  create_at: string // 创建时间
  id: number // 主键ID
  imu: number
  is_publish: number
  is_sys_gen: number
  project_id: number
  solution_name: string
  update_at: string // 更新时间

}

export interface DcsSolutionSensorShow {
  brand: number // 传感器供应商
  extend_info: string // 扩展信息
  model: string // 传感器型号
  sensor_id: number // 传感器id
  sensor_num: number // 传感器数量
  sensor_pos: number // 传感器位置信息
  sensor_type: number // 传感器类型

}

export interface DcsTimeSchedule {
  end_time: string // 预约结束时间 HH:mm:SS 格式
  id: number // 主键ID
  start_time: string // 预约起始时间 HH:mm:SS 格式

}

export interface DriverAttribute {
  booking_user_ids: string
  booking_user_ids_list: number[]
  create_at: string // 创建时间
  driver_id: number
  driver_manager_id: number
  id: number // 主键ID
  is_public: boolean
  update_at: string // 更新时间

}

export interface DriverSupportLoc {
  create_at: string // 创建时间
  driver_id: number
  id: number // 主键ID
  loc: number
  update_at: string // 更新时间

}

export interface DriverSupportProject {
  create_at: string // 创建时间
  driver_id: number
  id: number // 主键ID
  project_id: number
  update_at: string // 更新时间

}

export interface DriverTasksInfo {

}

export interface GetEventClassResult {
  auto_drive_metric?: number
  collect_labels: string
  create_at: string
  detail: string
  id: number
  is_badcase: boolean
  is_collect: boolean
  is_jira: boolean
  jira_module?: number
  priority?: number
  receiver?: string
  record_duration?: string
  record_topics: string
  seriousness?: number
  shadow_event_category?: number
  shadow_event_name?: string
  shadow_event_state?: number
  trigger_condition?: string

}

export interface GetEventClassTemplatesResult {
  content: number[]
  file_name: string

}

export interface GetWorkflowBatchSSHRet {
  url: string

}

export interface ListEventClassRecordsResult {
  agent: string // 代理
  body: string // 请求Body
  createdAt: string // 创建时间
  error_message: string // 错误信息
  id: number // 主键ID
  ip: string // 请求ip
  latency: string // 延迟
  method: string // 请求方法
  path: string // 请求路径
  resp: string // 响应Body
  status: number // 请求状态
  user_id: number // 用户id

}

export interface ListEventClassResult {
  auto_drive_metric?: number
  collect_labels: string
  create_at: string
  detail: string
  id: number
  is_badcase: boolean
  is_collect: boolean
  is_jira: boolean
  jira_module?: number
  priority?: number
  receiver?: string
  record_duration?: string
  record_topics: string
  seriousness?: number
  shadow_event_category?: number
  shadow_event_name?: string
  shadow_event_state?: number
  trigger_condition?: string

}

export interface MarkDataset {
  class_id: number
  collect_group_id: number
  collect_scene_id: number
  collect_task_id: number
  create_at: string // 创建时间
  created_by: number
  data_format: number
  file_size: number
  id: number // 主键ID
  name: string
  note: string
  pack_id: number
  parse_info_id: number
  source: number
  update_at: string // 更新时间

}

export interface MarkDatasetClass {
  annotated_format: string
  annotated_scene: string
  create_at: string // 创建时间
  dir_standard: string // 目录规范
  id: number // 主键ID
  level: number
  name: string
  parent_id: number
  update_at: string // 更新时间

}

export interface OilCard {
  balance: number // 余额
  balance_change_time: string // 金额变更时间
  borrow_date: string // 领用日期
  borrow_status: number // 领用状态(0:初始状态;1:未领用;2:已领用)
  borrow_user_id: number // 领用人ID
  card_manager_id: number // 加油卡管理人ID
  card_num: string // 加油卡号
  company: number // 公司
  create_at: string // 创建时间
  create_by: number // 创建者
  dep_manager_id: number // 部门负责人ID
  id: number // 主键ID
  manager_id: number // 行政管理人员ID
  open_date: string // 开卡日期
  open_gas_station: string // 开卡加油站
  purpose: string // 用途
  update_at: string // 更新时间
  used_department: number // 使用部门

}

export interface OilCardRechargeRecord {
  can_modify: boolean // 是否可以修改
  company: number // 公司
  create_at: string // 创建时间
  create_by: number // 创建者
  id: number // 主键ID
  oil_card_id: number // 加油卡ID
  person_id: number // 充值人ID
  recharde_note: string // 充值说明
  recharge_after_amount: number // 充值后金额
  recharge_amount: number // 充值金额
  recharge_before_amount: number // 充值前金额
  recharge_date: string // 充值日期
  update_at: string // 更新时间
  used_department: number // 使用部门

}

export interface OilCardRefuelRecord {
  abnormal: string // 记录异常信息
  can_modify: boolean // 是否可以修改
  car_card: string // 车牌
  company: number // 公司
  create_at: string // 创建时间
  create_by: number // 创建者
  gas_station: string // 加油站
  id: number // 主键ID
  missing_record: boolean // 是否为补充记录
  odometer: number // 加油是车辆里程表(公里/100)
  oil_card_id: number // 加油卡ID
  oil_price: number // 汽油单价
  person_id: number // 加油人ID
  refuel_after_amount: number // 加油后金额
  refuel_amount: number // 加油金额
  refuel_before_amount: number // 加油前金额
  refuel_date: string // 加油日期
  refuel_note: string // 加油说明
  refuel_quantity: number // 加油数量(升/100)
  update_at: string // 更新时间
  used_department: number // 使用部门

}

export interface PipelineDataSource {
  app_code: string
  category: string
  create_at: string
  description: string
  id: number
  name: string
  owner_id: number
  owner_type: string
  pack_id: number
  pack_type: string
  path_keys: string
  paths: string
  source_id: number

}

export interface PipelineDebugger {
  create_at: string
  created_by?: string
  id: number
  image?: string
  image_ver?: string
  ip: string
  operate: number
  ports: number[]
  resource_id: number
  run_state: string
  ssh_link: string
  start_time: string
  stop_time: string
  task_component_id?: number
  timeout?: number
  user_token: string
  webssh_link: string
  zros_project: string
  zros_ver: string

}

export interface PipelineEnvInfoCase {
  create_at: string
  env_info: number[]
  id: number
  owner_id: number
  owner_type: string

}

export interface PipelineImages {
  description: string
  name: string

}

export interface PipelineResource {
  core_num: number
  id: number
  ip: string
  mem_num: number
  name: string
  port: number
  update_at: string

}

export interface PipelineTaskComponent {
  category: string
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  module_name: string
  module_ver: string
  name: string
  runs: number
  source: string

}

export interface PipelineWorkflowBatch {
  create_at: string
  error_msg: string
  id: number
  operate: number
  resource_id: number
  run_progress: string
  run_state: string
  start_time: string
  stop_time: string
  task_component_cases: number[]
  webssh_link: string
  workflow_case_id: number

}

export interface PipelineWorkflowCase {
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  name: string
  run_mode: string
  run_now: boolean
  run_progress: string
  run_state: string
  start_time: string
  stop_time: string
  timeout: number
  user_token: string
  workflow_template_id: number

}

export interface PipelineWorkflowTemplate {
  category: string
  create_at: string
  created_by: string
  description: string
  id: number
  image: string
  image_ver: string
  name: string
  runs: number
  source: string
  timeout: number
  zros_project: string
  zros_ver: string

}

export interface PipelineWorkflowTemplateComponent {
  create_at: string
  id: number
  index: number
  task_component_id: number
  task_name: string
  workflow_template_id: number

}

export interface Project {
  collect_version: string
  create_at: string // 创建时间
  create_by: number
  describe: string
  detail: string
  end_date: string
  english_abbr: string
  id: number // 主键ID
  jira_link: string
  jira_project: string
  name: string
  official_name: string
  official_number: string
  progress: number
  start_date: string
  status: number
  update_at: string // 更新时间
  version_name: string

}

export interface RefreshTaskLog {

}

export interface SCMCommit {
  branch: string
  change_id: string
  change_num: number
  change_url: string
  ci_cost_time: number
  ci_end_time: string
  ci_start_time: string
  ci_status: string
  create_at: string // 创建时间
  created_by: string
  ct_cost_time: number
  ct_count: number
  ct_status: string
  id: number // 主键ID
  note: string
  patch_created_at: string
  patch_set: number
  repository_name: string
  review_cost_time: number
  reviewed_at: string
  server: string
  submitted_at: string
  update_at: string // 更新时间

}

export interface SCMCommitCTResult {
  create_at: string // 创建时间
  end_time: string
  id: number // 主键ID
  note: string
  platform: string
  project_name: string
  result: string
  scm_commit_id: number
  start_time: string
  update_at: string // 更新时间
  ut_id: number

}

export interface SCMCommitPlatformTask {
  build_cost_time: number
  build_end_time: string
  build_start_time: string
  ci_status: string
  create_at: string // 创建时间
  ct_status: string
  dt_cost_time: number
  id: number // 主键ID
  note: string
  pending_cost_time: number
  platform: string
  project_name: string
  scm_commit_id: number
  update_at: string // 更新时间
  ut_cost_time: number
  ut_end_time: string
  ut_start_time: string

}

export interface SCMRepository {
  create_at: string // 创建时间
  id: number // 主键ID
  name: string
  note: string
  organization_key: number
  owner: string
  server: string
  status: boolean
  update_at: string // 更新时间

}

export interface SCMStatisticsResult {

}

export interface SceneActivityLogFilterValueResult {
  group_serials: number[]
  operate_types: string[]

}

export interface Tag {
  before_status: number
  create_at: string // 创建时间
  hierarchy_id: number
  hierarchy_ids: string // 分组列表ids
  hierarchy_names: string // 分组列表名
  hierarchy_status: number
  name: string
  note: string
  source: number
  status: number
  tag_id: number // 主键ID
  update_at: string // 更新时间

}

export interface TagApprovalTask {
  approver_id: number
  comment: string
  content: string
  create_at: string // 创建时间
  desc: string
  id: number // 主键ID
  operate_type: number
  owner_id: number
  owner_type: string
  status: number
  task_object: string
  update_at: string // 更新时间

}

export interface TagFileRel {
  create_at: string // 创建时间
  file_create_time: number
  file_name: string
  file_owner: string
  file_path: string
  file_size: number
  id: number // 主键ID
  last_pack_id: number
  pack_id: number
  tag_id: number
  update_at: string // 更新时间

}

export interface TagHierarchy {
  before_status: number
  create_at: string // 创建时间
  have_approve_tag: boolean // 是否有审批中的标签
  id: number // 主键ID
  level: number
  name: string
  parent_id: number
  parent_status: number
  source: number
  status: number
  update_at: string // 更新时间

}

export interface WebhookDebugger {
  id: number
  timeout: number

}

export interface WebhookWorkflowBatch {
  id: number
  timeout: number

}

export interface WebhookWorkflowBatchRet {

}

export interface AutoCodeStruct {
  abbreviation: string // Struct简称
  autoCreateApiToSql: boolean // 是否自动创建api
  autoCreateResource: boolean // 是否自动创建资源标识
  autoMoveFile: boolean // 是否自动移动文件
  businessDB: string // 业务数据库
  description: string // Struct中文名称
  hasTimer: boolean
  humpPackageName: string // go文件名称
  package: string
  packageName: string // 文件名称
  structName: string // Struct名称
  tableName: string // 表名

}

export interface Entrance {
  create_at: string // 创建时间
  icon_key: string
  id: number // 主键ID
  name: string
  sort: number
  update_at: string // 更新时间

}

export interface EntranceMenuRef {
  create_at: string // 创建时间
  id: number // 主键ID
  menu_id: number
  update_at: string // 更新时间

}

export interface Field {
  clearable: boolean // 是否可清空
  columnName: string // 数据库字段
  comment: string // 数据库字段描述
  dataTypeLong: string // 数据库字段长度
  dictType: string // 字典
  errorText: string // 校验失败文字
  fieldDesc: string // 中文名
  fieldJson: string // FieldJson
  fieldName: string // Field名
  fieldSearchType: string // 搜索条件
  fieldType: string // Field数据类型
  require: boolean // 是否必填
  sort: boolean // 是否增加排序

}

export interface SysApi {
  apiGroup: string // api组
  createdAt: string // 创建时间
  description: string // api中文描述
  id: number // 主键ID
  method: string // 方法:创建POST(默认)|查看GET|更新PUT|删除DELETE
  path: string // api路径

}

export interface SysAuthority {
  authorityId: number // 角色ID
  authorityName: string // 角色名
  createdAt: string // 创建时间
  defaultRouter: string // 默认菜单(默认dashboard)
  deletedAt: string
  group_id: number
  parentId: number // 父角色ID
  show_flag: number
  updatedAt: string // 更新时间

}

export interface SysAutoCode {
  createdAt: string // 创建时间
  desc: string
  id: number // 主键ID
  label: string
  packageName: string

}

export interface SysBaseMenu {
  activeName: string
  apply_roles: string // 应用到的有角色列表
  closeTab: boolean // 自动关闭tab
  component: string // 对应前端文件路径
  createdAt: string // 创建时间
  defaultMenu: boolean // 是否是基础路由（开发中）
  doc_path: string
  hidden: boolean // 是否在列表隐藏
  icon: string // 菜单图标
  id: number // 主键ID
  keepAlive: boolean // 是否缓存
  name: string // 路由name
  parentId: string // 父菜单ID
  path: string // 路由path
  sort: number // 排序标记
  title: string // 菜单名

}

export interface SysBaseMenuBtn {
  createdAt: string // 创建时间
  desc: string
  id: number // 主键ID
  name: string
  sysBaseMenuID: number

}

export interface SysBaseMenuParameter {
  createdAt: string // 创建时间
  id: number // 主键ID
  key: string // 地址栏携带参数的key
  sysBaseMenuID: number
  type: string // 地址栏携带参数为params还是query
  value: string // 地址栏携带参数的值

}

export interface SysBaseUser {
  create_at: string // 创建时间
  email: string // 用户邮箱
  headerImg: string // 用户头像
  id: number // 主键ID
  nickName: string // 用户昵称
  phone: string // 用户手机号
  update_at: string // 更新时间
  userName: string // 用户登录名
  uuid: string // 用户UUID

}

export interface SysDictionary {
  createdAt: string // 创建时间
  desc: string // 描述
  id: number // 主键ID
  name: string // 字典名（中）
  status: boolean // 状态
  type: string // 字典名（英）

}

export interface SysDictionaryDetail {
  createdAt: string // 创建时间
  id: number // 主键ID
  label: string // 展示值
  sort: number // 排序标记
  status: boolean // 启用状态
  sysDictionaryID: number // 关联标记
  value: number // 字典值

}

export interface SysMenu {
  activeName: string
  apply_roles: string // 应用到的有角色列表
  closeTab: boolean // 自动关闭tab
  component: string // 对应前端文件路径
  createdAt: string // 创建时间
  defaultMenu: boolean // 是否是基础路由（开发中）
  doc_path: string
  entrance_ids: number[]
  hidden: boolean // 是否在列表隐藏
  icon: string // 菜单图标
  id: number // 主键ID
  keepAlive: boolean // 是否缓存
  menuId: string
  name: string // 路由name
  parentId: string // 父菜单ID
  path: string // 路由path
  sort: number // 排序标记
  title: string // 菜单名

}

export interface SysOperationRecord {
  agent: string // 代理
  body: string // 请求Body
  createdAt: string // 创建时间
  error_message: string // 错误信息
  id: number // 主键ID
  ip: string // 请求ip
  latency: string // 延迟
  method: string // 请求方法
  path: string // 请求路径
  resp: string // 响应Body
  status: number // 请求状态
  user_id: number // 用户id

}

export interface SysUser {
  activeColor: string // 活跃颜色
  authorityId: number // 用户角色ID
  baseColor: string // 基础颜色
  createdAt: string // 创建时间
  createdBy: number
  email: string // 用户邮箱
  enable: number // 用户是否被冻结 1正常 2冻结
  headerImg: string // 用户头像
  id: number // 主键ID
  nickName: string // 用户昵称
  phone: string // 用户手机号
  sideMode: string // 用户侧边主题
  type: number // 管理员类型 1:为管理员帐号
  userName: string // 用户登录名
  uuid: string // 用户UUID
  work_place: number

}

export interface System {

}

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
