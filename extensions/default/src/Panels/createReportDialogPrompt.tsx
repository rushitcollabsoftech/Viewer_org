import PROMPT_RESPONSES from '../utils/_shared/PROMPT_RESPONSES';

export default function CreateReportDialogPrompt({
  title = 'Create Report',
  extensionManager,
  servicesManager,
}): Promise<{
  value: string;
  dataSourceName: string;
  series: string;
  action: (typeof PROMPT_RESPONSES)[keyof typeof PROMPT_RESPONSES];
}> {
  const { uiDialogService, customizationService } = servicesManager.services;
  const dataSources = extensionManager.getDataSourcesForUI();
  const ReportDialog = customizationService.getCustomization('ohif.createReportDialog');

  const allowMultipleDataSources = window.config.allowMultiSelectExport;

  return new Promise(function (resolve, reject) {
    uiDialogService.show({
      id: 'report-dialog',
      title,
      content: ReportDialog,
      contentProps: {
        dataSources: allowMultipleDataSources ? dataSources : undefined,
        onSave: async ({ reportName, dataSource: selectedDataSource, series }) => {
          resolve({
            value: reportName,
            dataSourceName: selectedDataSource,
            series,
            action: PROMPT_RESPONSES.CREATE_REPORT,
          });
        },
        onCancel: () => {
          resolve({
            action: PROMPT_RESPONSES.CANCEL,
            value: undefined,
            series: undefined,
            dataSourceName: undefined,
          });
          break;
      }
    };

    const dataSourcesOpts = Object.keys(extensionManager.dataSourceMap)
      .filter(ds => {
        const configuration = extensionManager.dataSourceDefs[ds]?.configuration;
        const supportsStow = configuration?.supportsStow ?? configuration?.wadoRoot;
        return supportsStow;
      })
      .map(ds => {
        return {
          value: ds,
          label: ds,
          placeHolder: ds,
        };
      });

    dialogId = uiDialogService.create({
      centralize: true,
      isDraggable: false,
      content: Dialog,
      useLastPosition: false,
      showOverlay: true,
      contentProps: {
        title: 'Create Report',
        value: {
          label: '',
          dataSourceName: extensionManager.activeDataSource,
        },
        noCloseButton: true,
        onClose: _handleClose,
        actions: [
          { id: 'cancel', text: 'Cancel', type: ButtonEnums.type.secondary },
          { id: 'save', text: 'Save', type: ButtonEnums.type.primary },
        ],
        // TODO: Should be on button press...
        onSubmit: _handleFormSubmit,
        body: ({ value, setValue }) => {
          const onChangeHandler = event => {
            event.persist();
            setValue(value => ({ ...value, label: event.target.value }));
          };
          const onKeyPressHandler = event => {
            if (event.key === 'Enter') {
              uiDialogService.dismiss({ id: dialogId });
              resolve({
                action: PROMPT_RESPONSES.CREATE_REPORT,
                value: value.label,
              });
            }
          };
          return (
            <>
              {dataSourcesOpts.length > 1 && window.config?.allowMultiSelectExport && (
                <div>
                  <label className="text-[14px] leading-[1.2] text-white">Data Source</label>
                  <Select
                    closeMenuOnSelect={true}
                    className="border-primary-main mt-2 bg-black"
                    options={dataSourcesOpts}
                    placeholder={
                      dataSourcesOpts.find(option => option.value === value.dataSourceName)
                        .placeHolder
                    }
                    value={value.dataSourceName}
                    onChange={evt => {
                      setValue(v => ({ ...v, dataSourceName: evt.value }));
                    }}
                    isClearable={false}
                  />
                </div>
              )}
              <div className="mt-3">
                <Input
                  autoFocus
                  label="Enter the report name"
                  labelClassName="text-white text-[14px] leading-[1.2]"
                  className="hotkeyInputField"
                  type="text"
                  value={value.label}
                  onChange={onChangeHandler}
                  onKeyPress={onKeyPressHandler}
                  required
                />
              </div>
            </>
          );
        },
      },
    });
  });
}
