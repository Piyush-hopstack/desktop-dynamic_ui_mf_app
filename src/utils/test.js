export const json = {
  _id: "21312434124123dadwdar3123",
  name: "sampleFlowChart-1",
  activity: "receiving",
  enabled: "true",
  tenant: "tenant1",
  trigger: {
    start: [
      {
        conditionType: "all",
        conditions: {
          warehouse: "bengalore-warehouse",
          client: "client-1",
          location: "zone 1 barcode",
        },
        next: "17",
      },
    ],
    end: null,
  },
  nodes: {
    "17": {
      id: "17",
      type: "core",
      layout: {},
      userInputs: "sku",
      events: { onConfirm: "231", onCancel: "231" },
    },
    "231": {
      id: "231",
      type: "core",
      layout: { fields: ["sku", "name", "quantity"] },
      userInputs: "trackingNumber",
      events: { onConfirm: "17", onCancel: "17" },
    },
  },
  nodesList: {
    1: {
      nodeType: "core",
      stage: "scan-consignment",
      layout: {
        fields: [],
      },
      systemInfo: null,
      userInputs: ["trackingNumber"],
      events: {
        onCancel: "2",
        onConfirm: "3",
      },
    },
    2: {
      nodeType: "core",
      stage: "scan-item",
      layout: {
        fields: [],
      },
      systemInfo: null,
      userInputs: ["sku"],
      events: {
        onCancel: null,
        onConfirm: "1",
      },
    },
    3: {
      nodeType: "core",
      stage: "current-SKU",
      layout: {
        fields: [
          "name",
          "sku",
          "quantity",
          "notes",
          "isPerisable",
          "bestByDate",
        ],
        editable: ["tote", "bin"],
      },
      systemInfo: ["itemNumber", "itemName"],
      events: {
        onCancel: "2",
        onConfirm: "1",
      },
      skippable: true,
    },
  },
  edges: {
    trigger: {
      cases: {
        0: 1,
      },
    },
    1: 2,
    2: 3,
    3: 4,
    4: {
      next: 2,
      cases: {
        0: 5,
        1: 5,
      },
    },
  },
};
