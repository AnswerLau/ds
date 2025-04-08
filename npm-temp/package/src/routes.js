// 基础规范
import Color from './views/foundation/Color.vue'
import Typography from './views/foundation/Typography.vue'
import Layout from './views/foundation/Layout.vue'
import CornerRadius from './views/foundation/CornerRadius.vue'
import Elevation from './views/foundation/Elevation.vue'

// 组件
import Button from './views/components/Button.vue'
import Input from './views/components/Input.vue'
import Select from './views/components/Select.vue'
import Dropdown from './views/components/Dropdown.vue'
import InputNumber from './views/components/InputNumber.vue'
import Slider from './views/components/Slider.vue'
import Radio from './views/components/Radio.vue'
import Checkbox from './views/components/Checkbox.vue'
import Toggle from './views/components/Toggle.vue'
import Tooltip from './views/components/Tooltip.vue'
import Popover from './views/components/Popover.vue'
import Message from './views/components/Message.vue'
import Alert from './views/components/Alert.vue'
import Tab from './views/components/Tab.vue'
import Demo from './views/components/Demo.vue'
import WebsiteAudit from './views/components/WebsiteAudit.vue'

const routes = [
  {
    path: '/',
    redirect: '/foundation/color'
  },
  {
    path: '/foundation/color',
    component: Color
  },
  {
    path: '/foundation/typography',
    component: Typography
  },
  {
    path: '/foundation/layout',
    component: Layout
  },
  {
    path: '/foundation/corner-radius',
    component: CornerRadius
  },
  {
    path: '/foundation/elevation',
    component: Elevation
  },
  {
    path: '/components/button',
    component: Button
  },
  {
    path: '/components/input',
    component: Input
  },
  {
    path: '/components/select',
    component: Select
  },
  {
    path: '/components/dropdown',
    component: Dropdown
  },
  {
    path: '/components/input-number',
    component: InputNumber
  },
  {
    path: '/components/slider',
    component: Slider
  },
  {
    path: '/components/radio',
    component: Radio
  },
  {
    path: '/components/checkbox',
    component: Checkbox
  },
  {
    path: '/components/toggle',
    component: Toggle
  },
  {
    path: '/components/tooltip',
    component: Tooltip
  },
  {
    path: '/components/popover',
    component: Popover
  },
  {
    path: '/components/message',
    component: Message
  },
  {
    path: '/components/alert',
    component: Alert
  },
  {
    path: '/components/tab',
    component: Tab
  },
  {
    path: '/components/demo',
    component: Demo
  },
  {
    path: '/tools/website-audit',
    component: WebsiteAudit
  }
]

export default routes 