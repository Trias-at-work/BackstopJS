// Example config using js rather than json.
module.exports = {
	// The viewports
  "viewports": [
    {
      "name": "phone",
      "width": 320,
      "height": 480
    },
    {
      "name": "tablet_v",
      "width": 568,
      "height": 1024
    },
    {
      "name": "tablet_h",
      "width": 1024,
      "height": 768
    }
  ],

	// Scenarios
  "scenarios": [
    {
      "label": "measure twice",
      "url": "test/simple.html",
      "hideSelectors": [],
      "removeSelectors": [
        "#carbonads-container"
      ],
      "selectors": [
        ".page-header h1",
        ".page-header small",
        ".graph:nth-of-type(1)",
        ".graph:nth-of-type(2)",
        "body",
        "nav"
      ],
      "readyEvent": "backstop.ready",
      "delay": 10,
      "misMatchThreshold" : 0.1
    }
  ],
  "paths": {
    "bitmaps_reference": "../../backstop_data/bitmaps_reference",
    "bitmaps_test": "../../backstop_data/bitmaps_test",
    "compare_data": "../../backstop_data/bitmaps_test/compare.json"
  },
  "engine": "phantomjs",
  "report": ["CLI"]
};
