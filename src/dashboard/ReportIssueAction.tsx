import { ENV } from '@waldur/configs/default';
import { FormattedHtml } from '@waldur/core/FormattedHtml';
import { MessageDialog } from '@waldur/core/MessageDialog';
import { isFeatureVisible } from '@waldur/features/connect';
import { translate } from '@waldur/i18n';
import { openIssueCreateDialog } from '@waldur/issues/create/actions';
import { openModalDialog } from '@waldur/modal/actions';
import store from '@waldur/store/store';

interface ReportIssueActionProps {
  issue: any;
  state: string;
}

export const getIssueAction = (props: ReportIssueActionProps) => {
  return {
    title: translate('Report an issue'),
    onClick() {
      if (isFeatureVisible('support')) {
        store.dispatch(
          openIssueCreateDialog({
            issue: props.issue,
          }),
        );
      } else {
        const context = { supportEmail: ENV.supportEmail };
        const message = translate(
          'To report an issue, please send an email to <a href="mailto:{supportEmail}">{supportEmail}</a>.',
          context,
        );
        store.dispatch(
          openModalDialog(MessageDialog, {
            resolve: {
              title: translate('Report an issue'),
              message: <FormattedHtml html={message} />,
            },
          }),
        );
      }
    },
  };
};
