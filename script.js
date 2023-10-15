const data = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {"url": "timelinedata.csv"},
    width: 600,
    mark: "bar",
    encoding: {
      x: {
        field: "country",
        type: "ordinal",
        title: "Country",
        axis: {
          labelAngle: -45,
          labelAlign: "left",
        },
      },
      y: {
        field: "year",
        type: "quantitative",
        title: "Joining Year",
      },
    },
    layer: [
      {
        mark: "bar",
        encoding: {
          color: {value: "lightblue"},
          opacity: {
            condition: {selection: "select", value: 1},
            value: 0.2,
          },
        },
      },
    ],
    selection: {
      select: {
        type: "multi",
        fields: ["country"],
      },
    },
  };
  
  vegaEmbed("#chart", data);
  