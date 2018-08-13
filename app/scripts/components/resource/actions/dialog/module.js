import actionDialog from './action-dialog';
import actionField from './action-field';
import actionFieldBoolean from './action-field-boolean';
import actionFieldCrontab from './action-field-crontab';
import actionFieldDatetime from './action-field-datetime';
import actionFieldInteger from './action-field-integer';
import actionFieldDecimal from './action-field-decimal';
import actionFieldMultiselect from './action-field-multiselect';
import actionFieldSelect from './action-field-select';
import actionFieldString from './action-field-string';
import actionFieldText from './action-field-text';
import actionFieldChoice from './action-field-choice';
import actionFieldTimezone from './action-field-timezone';

export default module => {
  module.directive('actionDialog', actionDialog);
  module.directive('actionField', actionField);
  module.component('actionFieldBoolean', actionFieldBoolean);
  module.component('actionFieldCrontab', actionFieldCrontab);
  module.component('actionFieldDatetime', actionFieldDatetime);
  module.component('actionFieldInteger', actionFieldInteger);
  module.component('actionFieldDecimal', actionFieldDecimal);
  module.component('actionFieldMultiselect', actionFieldMultiselect);
  module.component('actionFieldSelect', actionFieldSelect);
  module.component('actionFieldString', actionFieldString);
  module.component('actionFieldText', actionFieldText);
  module.component('actionFieldChoice', actionFieldChoice);
  module.component('actionFieldTimezone', actionFieldTimezone);
};
