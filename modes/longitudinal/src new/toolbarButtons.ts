// TODO: torn, can either bake this here; or have to create a whole new button type
// Only ways that you can pass in a custom React component for render :l
import { ToolbarService } from '@ohif/core';
import type { Button } from '@ohif/core/types';

const { createButton } = ToolbarService;

export const setToolActiveToolbar = {
  commandName: 'setToolActiveToolbar',
  commandOptions: {
    toolGroupIds: ['default', 'mpr', 'SRToolGroup', 'volume3d'],
  },
};

const toolbarButtons: Button[] = [
  {
    id: 'MeasurementTools',
    uiType: 'ohif.splitButton',
    props: {
      groupId: 'MeasurementTools',
      // group evaluate to determine which item should move to the top
      evaluate: 'evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList',
      primary: createButton({
        id: 'Length',
        icon: 'tool-length',
        label: 'Length',
        tooltip: 'Length Tool',
        commands: setToolActiveToolbar,
        evaluate: 'evaluate.cornerstoneTool',
      }),
      secondary: {
        icon: 'chevron-down',
        tooltip: 'More Measure Tools',
      },
      items: [
        createButton({
          id: 'Length',
          icon: 'tool-length',
          label: 'Length',
          tooltip: 'Length Tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'Bidirectional',
          icon: 'tool-bidirectional',
          label: 'Bidirectional',
          tooltip: 'Bidirectional Tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'ArrowAnnotate',
          icon: 'tool-annotate',
          label: 'Annotation',
          tooltip: 'Arrow Annotate',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'EllipticalROI',
          icon: 'tool-ellipse',
          label: 'Ellipse',
          tooltip: 'Ellipse ROI',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'RectangleROI',
          icon: 'tool-rectangle',
          label: 'Rectangle',
          tooltip: 'Rectangle ROI',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'CircleROI',
          icon: 'tool-circle',
          label: 'Circle',
          tooltip: 'Circle Tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'PlanarFreehandROI',
          icon: 'icon-tool-freehand-roi',
          label: 'Freehand ROI',
          tooltip: 'Freehand ROI',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'SplineROI',
          icon: 'icon-tool-spline-roi',
          label: 'Spline ROI',
          tooltip: 'Spline ROI',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
        createButton({
          id: 'LivewireContour',
          icon: 'icon-tool-livewire',
          label: 'Livewire tool',
          tooltip: 'Livewire tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        }),
      ],
    },
  },
  {
    id: 'Zoom',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-zoom',
      label: 'Zoom',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // From CS added this code ============= END ===================
  // From CS added this code ============= NEW START ===================

  // From CS added this code ============= NEW END ===================
  {
    id: 'Length',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-length',
      label: 'Length',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // {
  //   id: 'Bidirectional',
  //   uiType: 'ohif.radioGroup',
  //   props: {
  //     icon: 'tool-bidirectional',
  //     label: 'Bidirectional',
  //     commands: setToolActiveToolbar,
  //     evaluate: 'evaluate.cornerstoneTool',
  //   },
  // },
  {
    id: 'ArrowAnnotate',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-annotate',
      label: 'Annotation',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'EllipticalROI',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-ellipse',
      label: 'Ellipse',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // {
  //   id: 'RectangleROI',
  //   uiType: 'ohif.radioGroup',
  //   props: {
  //     icon: 'tool-rectangle',
  //     label: 'Rectangle',
  //     commands: setToolActiveToolbar,
  //     evaluate: 'evaluate.cornerstoneTool',
  //   },
  // },
  {
    id: 'CircleROI',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-circle',
      label: 'Circle',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // {
  //   id: 'PlanarFreehandROI',
  //   uiType: 'ohif.radioGroup',
  //   props: {
  //     icon: 'icon-tool-freehand-roi',
  //     label: 'Freehand ROI',
  //     commands: setToolActiveToolbar,
  //     evaluate: 'evaluate.cornerstoneTool',
  //   },
  // },
  // {
  //   id: 'SplineROI',
  //   uiType: 'ohif.radioGroup',
  //   props: {
  //     icon: 'icon-tool-spline-roi',
  //     label: 'Spline ROI',
  //     commands: setToolActiveToolbar,
  //     evaluate: 'evaluate.cornerstoneTool',
  //   },
  // },
  // {
  //   id: 'LivewireContour',
  //   uiType: 'ohif.radioGroup',
  //   props: {
  //     icon: 'icon-tool-livewire',
  //     label: 'Livewire tool',
  //     commands: setToolActiveToolbar,
  //     evaluate: 'evaluate.cornerstoneTool',
  //   },
  // },
  {
    id: 'Angle',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-angle',
      label: 'Angle',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'StackScroll',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-stack-scroll',
      label: 'Stack Scroll',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // From CS added this code ============= END ===================
  // Window Level
  {
    id: 'WindowLevel',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-window-level',
      label: 'Window Level',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  // Pan...
  {
    id: 'Pan',
    uiType: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-move',
      label: 'Pan',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'TrackballRotate',
    uiType: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-3d-rotate',
      label: '3D Rotate',
      commands: setToolActiveToolbar,
      evaluate: {
        name: 'evaluate.cornerstoneTool',
        disabledText: 'Select a 3D viewport to enable this tool',
      },
    },
  },
  {
    id: 'Capture',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-capture',
      label: 'Capture',
      commands: 'showDownloadViewportModal',
      evaluate: 'evaluate.action',
    },
  },
  {
    id: 'Layout',
    uiType: 'ohif.layoutSelector',
    props: {
      rows: 3,
      columns: 4,
      evaluate: 'evaluate.action',
    },
  },
  {
    id: 'Crosshairs',
    uiType: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-crosshair',
      label: 'Crosshairs',
      commands: {
        commandName: 'setToolActiveToolbar',
        commandOptions: {
          toolGroupIds: ['mpr'],
        },
      },
      evaluate: {
        name: 'evaluate.cornerstoneTool',
        disabledText: 'Select an MPR viewport to enable this tool',
      },
    },
  },
];

export default toolbarButtons;
