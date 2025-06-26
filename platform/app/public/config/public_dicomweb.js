window.config = {
  routerBasename: null,
  showStudyList: true,
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  servers: {
    dicomWeb: [
      {
        name: 'aws',
        wadoUriRoot: 'https://collabdicomcloudwadowebapicore202406.azurewebsites.net/api',
        qidoRoot: 'https://collabdicomcloudwadowebapicore202406.azurewebsites.net/api',
        wadoRoot: 'https://collabdicomcloudwadowebapicore202406.azurewebsites.net/api',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        supportsFuzzyMatching: true,
        omitQuotationForMultipartRequest: true,
      },
    ],
  },
  i18n: {
    LOCIZE_PROJECTID: 'a8da3f9a-e467-4dd6-af33-474d582a0294',
    LOCIZE_API_KEY: null, // Developers can use this to do in-context editing. DO NOT COMMIT THIS KEY!
    USE_LOCIZE: false,
  },
};
