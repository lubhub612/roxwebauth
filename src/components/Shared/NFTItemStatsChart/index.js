import React, { useState, useEffect } from "react";
import { StatsChartContainer } from "./styles";
// import Chart from "react-apexcharts";
import GlobalContext from "../../../contexts/GlobalContext";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useContext } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const NFTItemStatsChart = (props) => {
  const { period } = props;

  const router = useRouter();
  const { collection, tokenId } = router.query;
  console.log(
    "🚀 ~ file: index.js:14 ~ NFTItemStatsChart ~ collection, tokenId:",
    collection,
    tokenId
  );
  const { t } = useTranslation();
  const { invokeServer } = useContext(GlobalContext);

  const [prices, setPrices] = useState([]);
  const [opt, setOptions] = useState(null);
  const [isEnableChart, setEnableChart] = useState(false);

  useEffect(() => {
    let ac = new AbortController();

    invokeServer(
      "get",
      `/api/trade?collectionAddress=${collection?.toLowerCase()}&tokenId=${tokenId}&period=${period}`
    )
      .then((r) => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            let tt = r.data.prices.map((t) => {
              return [new Date(t.when).getTime(), t.priceUSD.toFixed(2)];
            });

            setPrices((t) => [{ data: tt }]);

            setOptions((t) => {
              return {
                chart: {
                  id: "area-datetime",
                  type: "area",
                  height: 200,
                  foreColor: "#C4C4C4",
                  toolbar: {
                    show: false,
                  },
                  zoom: {
                    autoScaleYaxis: true,
                  },
                },
                grid: {
                  borderColor: "#4C4E55",
                },
                dataLabels: {
                  enabled: false,
                },
                markers: {
                  size: 0,
                  style: "hollow",
                },
                xaxis: {
                  type: "datetime",
                  min: r.data.min,
                  tickAmount: 6,
                  tooltip: {
                    enabled: false,
                  },
                  axisBorder: {
                    show: true,
                    color: "#4C4E55",
                    offsetX: 0,
                    offsetY: 1,
                  },
                },
                yaxis: {
                  show: true,
                  showAlways: true,
                  axisBorder: {
                    show: true,
                    color: "#4C4E55",
                    offsetX: -5,
                    offsetY: 0,
                  },
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: [],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.5,
                    stops: [0, 100],
                    colorStops: [
                      {
                        offset: 0,
                        color: "#AAFF26",
                        opacity: 0.4,
                      },
                      {
                        offset: 100,
                        color: "#AAFF26",
                        opacity: 0,
                      },
                    ],
                  },
                },
                colors: ["#AAFF26", "#AAFF26"],
                tooltip: {
                  enabled: true,
                  style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                    color: "red",
                  },
                },
              };
            });
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });

    return () => ac.abort();
  }, [collection, tokenId, period]);

  useEffect(() => {
    let ac = new AbortController();
    setTimeout(() => {
      if (ac.signal.aborted === false) {
        opt && setEnableChart(true);
      }
    }, 3000);

    return () => ac.abort();
  }, [opt]);

  return (
    <StatsChartContainer>
      {isEnableChart === true ? (
        <Chart options={opt} series={prices} type="area" height={200} />
      ) : (
        <div>{t("Loading...")}</div>
      )}
    </StatsChartContainer>
  );
};

export default NFTItemStatsChart;
