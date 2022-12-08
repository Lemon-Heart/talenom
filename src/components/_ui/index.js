import UiSvgIcon from './UiSvgIcon'
import UiButton from './UiButton'
import UiDropdown from './UiDropdown'
import UiInput from './UiInput'
import UiSelect from './UiSelect'
import UiLanguageSelect from './UiLanguageSelect'
import UiFullScreenLoader from './UiFullScreenLoader'
import UiBaseLoader from './UiBaseLoader'
import UiClose from './UiClose'
import UiBurgerMenuIcon from './UiBurgerMenuIcon'

export default function initializeUiKit (app) {
  app.component('UiSvgIcon', UiSvgIcon)
  app.component('UiButton', UiButton)
  app.component('UiDropdown', UiDropdown)
  app.component('UiInput', UiInput)
  app.component('UiSelect', UiSelect)
  app.component('UiLanguageSelect', UiLanguageSelect)
  app.component('UiFullScreenLoader', UiFullScreenLoader)
  app.component('UiBaseLoader', UiBaseLoader)
  app.component('UiClose', UiClose)
  app.component('UiBurgerMenuIcon', UiBurgerMenuIcon)
}
