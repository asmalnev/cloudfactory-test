import {useReducer} from 'react'
import {PoloniexContext} from './poloniexContext'
import {poloniexReducer} from './poloniexReducer'
import {GET_QUOTES, SET_LOADING, CLEAR_QUOTES, SET_ERROR} from '../types'
// import axios from 'axios'

export const PoloniexState = ({children}) => {
  const initialState = {
    quotes: [],
    loading: false,
    error: false
  }

  const [state, dispatch] = useReducer(poloniexReducer, initialState)

  const getQuotes = async () => {
    clearQuotes()
    setLoading()

    /*const config = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://poloniex.com/public?command=returnTicker'
    }*/

    try {
      // const response = await axios(config)

      const response = {
      "BTC_BTS" : {
        "id" : 14,
        "last" : "0.0000005314",
        "lowestAsk" : "0.0000005399",
        "highestBid" : "0.0000005100",
        "percentChange" : "0.0000000000",
        "baseVolume" : "0.0035764936",
        "quoteVolume" : "6708.0000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0000005365",
        "low24hr" : "0.0000005299"
      },
      "BTC_DASH" : {
        "id" : 24,
        "last" : "0.002818",
        "lowestAsk" : "0.002827",
        "highestBid" : "0.002817",
        "percentChange" : "0.020000",
        "baseVolume" : "0.104376",
        "quoteVolume" : "37.380000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.002820",
        "low24hr" : "0.002729"
      },
      "BTC_DOGE" : {
        "id" : 27,
        "last" : "0.000004240",
        "lowestAsk" : "0.000004240",
        "highestBid" : "0.000004233",
        "percentChange" : "-0.010000000",
        "baseVolume" : "0.456469058",
        "quoteVolume" : "107325.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000004280",
        "low24hr" : "0.000004221"
      },
      "BTC_LTC" : {
        "id" : 50,
        "last" : "0.004499",
        "lowestAsk" : "0.004504",
        "highestBid" : "0.004496",
        "percentChange" : "0.000000",
        "baseVolume" : "52.894529",
        "quoteVolume" : "11793.870000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.004521",
        "low24hr" : "0.004440"
      },
      "BTC_NXT" : {
        "id" : 69,
        "last" : "0.0000001950",
        "lowestAsk" : "0.0000002022",
        "highestBid" : "0.0000001944",
        "percentChange" : "-0.0100000000",
        "baseVolume" : "0.0212475870",
        "quoteVolume" : "108871.0000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0000001970",
        "low24hr" : "0.0000001950"
      },
      "BTC_STR" : {
        "id" : 89,
        "last" : "0.000004410",
        "lowestAsk" : "0.000004464",
        "highestBid" : "0.000004435",
        "percentChange" : "0.000000000",
        "baseVolume" : "0.012049522",
        "quoteVolume" : "2727.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000004432",
        "low24hr" : "0.000004410"
      },
      "BTC_XEM" : {
        "id" : 112,
        "last" : "0.000001717",
        "lowestAsk" : "0.000001731",
        "highestBid" : "0.000001717",
        "percentChange" : "-0.010000000",
        "baseVolume" : "0.004464200",
        "quoteVolume" : "2600.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000001730",
        "low24hr" : "0.000001717"
      },
      "BTC_XMR" : {
        "id" : 114,
        "last" : "0.009291",
        "lowestAsk" : "0.009294",
        "highestBid" : "0.009280",
        "percentChange" : "0.010000",
        "baseVolume" : "7.653129",
        "quoteVolume" : "832.170000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.009350",
        "low24hr" : "0.009100"
      },
      "BTC_XRP" : {
        "id" : 117,
        "last" : "0.00002009",
        "lowestAsk" : "0.00002010",
        "highestBid" : "0.00002008",
        "percentChange" : "-0.01000000",
        "baseVolume" : "15.63412436",
        "quoteVolume" : "772855.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00002040",
        "low24hr" : "0.00001997"
      },
      "USDT_BTC" : {
        "id" : 121,
        "last" : "16935.34",
        "lowestAsk" : "16935.33",
        "highestBid" : "16935.28",
        "percentChange" : "0.00",
        "baseVolume" : "3253102.99",
        "quoteVolume" : "191.91",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "17500.00",
        "low24hr" : "16903.21"
      },
      "USDT_DASH" : {
        "id" : 122,
        "last" : "47.66",
        "lowestAsk" : "48.83",
        "highestBid" : "47.64",
        "percentChange" : "0.02",
        "baseVolume" : "1700.95",
        "quoteVolume" : "36.37",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "47.80",
        "low24hr" : "45.85"
      },
      "USDT_LTC" : {
        "id" : 123,
        "last" : "76.266",
        "lowestAsk" : "76.186",
        "highestBid" : "76.144",
        "percentChange" : "0.000",
        "baseVolume" : "377165.764",
        "quoteVolume" : "4970.727",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "76.630",
        "low24hr" : "75.243"
      },
      "USDT_STR" : {
        "id" : 125,
        "last" : "0.0755",
        "lowestAsk" : "0.0756",
        "highestBid" : "0.0755",
        "percentChange" : "0.0100",
        "baseVolume" : "912.7566",
        "quoteVolume" : "12089.5139",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0755",
        "low24hr" : "0.0747"
      },
      "USDT_XMR" : {
        "id" : 126,
        "last" : "157.42",
        "lowestAsk" : "157.48",
        "highestBid" : "157.22",
        "percentChange" : "0.01",
        "baseVolume" : "86970.54",
        "quoteVolume" : "556.47",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "158.64",
        "low24hr" : "153.76"
      },
      "USDT_XRP" : {
        "id" : 127,
        "last" : "0.3401",
        "lowestAsk" : "0.3402",
        "highestBid" : "0.3400",
        "percentChange" : "-0.0100",
        "baseVolume" : "1680541.1035",
        "quoteVolume" : "4906790.3905",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.3455",
        "low24hr" : "0.3372"
      },
      "BTC_ETH" : {
        "id" : 148,
        "last" : "0.07456",
        "lowestAsk" : "0.07456",
        "highestBid" : "0.07453",
        "percentChange" : "0.00000",
        "baseVolume" : "82.12897",
        "quoteVolume" : "1100.93000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.07475",
        "low24hr" : "0.07439"
      },
      "USDT_ETH" : {
        "id" : 149,
        "last" : "1262.87",
        "lowestAsk" : "1263.32",
        "highestBid" : "1262.31",
        "percentChange" : "0.00",
        "baseVolume" : "2378324.55",
        "quoteVolume" : "1882.47",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "1266.66",
        "low24hr" : "1258.24"
      },
      "BTC_SC" : {
        "id" : 150,
        "last" : "0.0000001405",
        "lowestAsk" : "0.0000001405",
        "highestBid" : "0.0000001367",
        "percentChange" : "0.0200000000",
        "baseVolume" : "0.0039286117",
        "quoteVolume" : "28737.0000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0000001405",
        "low24hr" : "0.0000001351"
      },
      "BTC_DCR" : {
        "id" : 162,
        "last" : "0.001091",
        "lowestAsk" : "0.001094",
        "highestBid" : "0.001091",
        "percentChange" : "-0.010000",
        "baseVolume" : "0.074120",
        "quoteVolume" : "67.370000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.001118",
        "low24hr" : "0.001089"
      },
      "BTC_LSK" : {
        "id" : 163,
        "last" : "0.00004291",
        "lowestAsk" : "0.00004300",
        "highestBid" : "0.00004261",
        "percentChange" : "0.04000000",
        "baseVolume" : "0.02297295",
        "quoteVolume" : "547.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00004322",
        "low24hr" : "0.00004121"
      },
      "BTC_STEEM" : {
        "id" : 168,
        "last" : "0.00000874",
        "lowestAsk" : "0.00000979",
        "highestBid" : "0.00000873",
        "percentChange" : "0.00000000",
        "baseVolume" : "0.00000000",
        "quoteVolume" : "0.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00000874",
        "low24hr" : "0.00000874"
      },
      "BTC_ETC" : {
        "id" : 171,
        "last" : "0.001181",
        "lowestAsk" : "0.001181",
        "highestBid" : "0.001180",
        "percentChange" : "-0.010000",
        "baseVolume" : "7.864802",
        "quoteVolume" : "6653.010000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.001211",
        "low24hr" : "0.001154"
      },
      "ETH_ETC" : {
        "id" : 172,
        "last" : "0.01596",
        "lowestAsk" : "0.01596",
        "highestBid" : "0.01518",
        "percentChange" : "0.00000",
        "baseVolume" : "0.28133",
        "quoteVolume" : "17.72300",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.01617",
        "low24hr" : "0.01556"
      },
      "USDT_ETC" : {
        "id" : 173,
        "last" : "20.023",
        "lowestAsk" : "20.008",
        "highestBid" : "19.984",
        "percentChange" : "-0.010",
        "baseVolume" : "1424116.134",
        "quoteVolume" : "71325.586",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "20.515",
        "low24hr" : "19.570"
      },
      "BTC_ARDR" : {
        "id" : 177,
        "last" : "0.000003870",
        "lowestAsk" : "0.000003999",
        "highestBid" : "0.000003703",
        "percentChange" : "0.030000000",
        "baseVolume" : "0.033529320",
        "quoteVolume" : "8684.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000003870",
        "low24hr" : "0.000003750"
      },
      "BTC_ZEC" : {
        "id" : 178,
        "last" : "0.002459",
        "lowestAsk" : "0.002513",
        "highestBid" : "0.002443",
        "percentChange" : "-0.020000",
        "baseVolume" : "0.039329",
        "quoteVolume" : "15.940000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.002498",
        "low24hr" : "0.002408"
      },
      "ETH_ZEC" : {
        "id" : 179,
        "last" : "0.03286",
        "lowestAsk" : "0.03420",
        "highestBid" : "0.03280",
        "percentChange" : "-0.01000",
        "baseVolume" : "0.10717",
        "quoteVolume" : "3.26500",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.03331",
        "low24hr" : "0.03272"
      },
      "USDT_ZEC" : {
        "id" : 180,
        "last" : "41.44",
        "lowestAsk" : "42.13",
        "highestBid" : "41.36",
        "percentChange" : "-0.02",
        "baseVolume" : "310.06",
        "quoteVolume" : "7.43",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "42.99",
        "low24hr" : "41.44"
      },
      "BTC_ZRX" : {
        "id" : 192,
        "last" : "0.00000917",
        "lowestAsk" : "0.00000954",
        "highestBid" : "0.00000928",
        "percentChange" : "-0.03000000",
        "baseVolume" : "0.00164143",
        "quoteVolume" : "179.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00000947",
        "low24hr" : "0.00000917"
      },
      "ETH_ZRX" : {
        "id" : 193,
        "last" : "0.0001273",
        "lowestAsk" : "0.0001388",
        "highestBid" : "0.0001263",
        "percentChange" : "0.0000000",
        "baseVolume" : "0.0000000",
        "quoteVolume" : "0.0000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0001273",
        "low24hr" : "0.0001273"
      },
      "BTC_CVC" : {
        "id" : 194,
        "last" : "0.000004002",
        "lowestAsk" : "0.000004992",
        "highestBid" : "0.000004004",
        "percentChange" : "0.000000000",
        "baseVolume" : "0.000672336",
        "quoteVolume" : "168.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000004002",
        "low24hr" : "0.000004001"
      },
      "BTC_OMG" : {
        "id" : 196,
        "last" : "0.00006310",
        "lowestAsk" : "0.00006350",
        "highestBid" : "0.00006285",
        "percentChange" : "-0.02000000",
        "baseVolume" : "0.02765075",
        "quoteVolume" : "430.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00006484",
        "low24hr" : "0.00006310"
      },
      "BTC_GAS" : {
        "id" : 198,
        "last" : "0.0001193",
        "lowestAsk" : "0.0001205",
        "highestBid" : "0.0001181",
        "percentChange" : "0.0100000",
        "baseVolume" : "0.0027520",
        "quoteVolume" : "23.4000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0001193",
        "low24hr" : "0.0001176"
      },
      "BTC_STORJ" : {
        "id" : 200,
        "last" : "0.00001511",
        "lowestAsk" : "0.00001536",
        "highestBid" : "0.00001511",
        "percentChange" : "-0.01000000",
        "baseVolume" : "0.00328107",
        "quoteVolume" : "217.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00001522",
        "low24hr" : "0.00001511"
      },
      "BTC_EOS" : {
        "id" : 201,
        "last" : "0.00005243",
        "lowestAsk" : "0.00005253",
        "highestBid" : "0.00005221",
        "percentChange" : "-0.01000000",
        "baseVolume" : "65.27293311",
        "quoteVolume" : "1243337.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00005315",
        "low24hr" : "0.00005211"
      },
      "ETH_EOS" : {
        "id" : 202,
        "last" : "0.0007027",
        "lowestAsk" : "0.0007256",
        "highestBid" : "0.0007004",
        "percentChange" : "-0.0100000",
        "baseVolume" : "0.0174425",
        "quoteVolume" : "24.6000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0007130",
        "low24hr" : "0.0007027"
      },
      "USDT_EOS" : {
        "id" : 203,
        "last" : "0.8896",
        "lowestAsk" : "0.8896",
        "highestBid" : "0.8863",
        "percentChange" : "-0.0100",
        "baseVolume" : "5426.3026",
        "quoteVolume" : "6102.1428",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.8997",
        "low24hr" : "0.8822"
      },
      "BTC_SNT" : {
        "id" : 204,
        "last" : "0.000001157",
        "lowestAsk" : "0.000001158",
        "highestBid" : "0.000001149",
        "percentChange" : "0.000000000",
        "baseVolume" : "0.000000000",
        "quoteVolume" : "0.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000001157",
        "low24hr" : "0.000001157"
      },
      "BTC_KNC" : {
        "id" : 207,
        "last" : "0.00002986",
        "lowestAsk" : "0.00002990",
        "highestBid" : "0.00002941",
        "percentChange" : "0.00000000",
        "baseVolume" : "0.00000000",
        "quoteVolume" : "0.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00002986",
        "low24hr" : "0.00002986"
      },
      "BTC_BAT" : {
        "id" : 210,
        "last" : "0.00001062",
        "lowestAsk" : "0.00001080",
        "highestBid" : "0.00001063",
        "percentChange" : "0.00000000",
        "baseVolume" : "0.03474723",
        "quoteVolume" : "3277.00000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.00001069",
        "low24hr" : "0.00001057"
      },
      "USDT_BAT" : {
        "id" : 212,
        "last" : "0.1765",
        "lowestAsk" : "0.1821",
        "highestBid" : "0.1804",
        "percentChange" : "-0.0200",
        "baseVolume" : "1042.8027",
        "quoteVolume" : "6260.9716",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.1812",
        "low24hr" : "0.1044"
      },
      "BTC_LOOM" : {
        "id" : 213,
        "last" : "0.000002414",
        "lowestAsk" : "0.000002478",
        "highestBid" : "0.000002380",
        "percentChange" : "0.000000000",
        "baseVolume" : "0.001399055",
        "quoteVolume" : "593.000000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.000002426",
        "low24hr" : "0.000002306"
      },
      "USDT_DOGE" : {
        "id" : 216,
        "last" : "0.071796",
        "lowestAsk" : "0.071795",
        "highestBid" : "0.071769",
        "percentChange" : "-0.010000",
        "baseVolume" : "520369.866178",
        "quoteVolume" : "7226558.300000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.072553",
        "low24hr" : "0.071300"
      },
      "USDT_LSK" : {
        "id" : 218,
        "last" : "0.7283",
        "lowestAsk" : "0.7325",
        "highestBid" : "0.7235",
        "percentChange" : "0.0200",
        "baseVolume" : "519.4247",
        "quoteVolume" : "727.1471",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.7317",
        "low24hr" : "0.7029"
      },
      "USDT_SC" : {
        "id" : 219,
        "last" : "0.002251",
        "lowestAsk" : "0.002345",
        "highestBid" : "0.002316",
        "percentChange" : "-0.030000",
        "baseVolume" : "769.385017",
        "quoteVolume" : "330625.770000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.002331",
        "low24hr" : "0.002251"
      },
      "USDT_ZRX" : {
        "id" : 220,
        "last" : "0.1505",
        "lowestAsk" : "0.1698",
        "highestBid" : "0.1562",
        "percentChange" : "0.0000",
        "baseVolume" : "0.0000",
        "quoteVolume" : "0.0000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.1505",
        "low24hr" : "0.1505"
      },
      "BTC_QTUM" : {
        "id" : 221,
        "last" : "0.0001138",
        "lowestAsk" : "0.0001176",
        "highestBid" : "0.0001136",
        "percentChange" : "-0.0100000",
        "baseVolume" : "0.0046846",
        "quoteVolume" : "41.5000000",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.0001144",
        "low24hr" : "0.0001110"
      },
      "USDT_QTUM" : {
        "id" : 223,
        "last" : "1.955",
        "lowestAsk" : "2.145",
        "highestBid" : "1.949",
        "percentChange" : "0.000",
        "baseVolume" : "317.168",
        "quoteVolume" : "162.792",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "2.078",
        "low24hr" : "1.901"
      },
      "USDC_BTC" : {
        "id" : 224,
        "last" : "16873.02",
        "lowestAsk" : "16873.01",
        "highestBid" : "16872.98",
        "percentChange" : "0.00",
        "baseVolume" : "371740.93",
        "quoteVolume" : "22.02",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "16934.11",
        "low24hr" : "16808.34"
      },
      "USDC_ETH" : {
        "id" : 225,
        "last" : "1257.69",
        "lowestAsk" : "1260.50",
        "highestBid" : "1254.87",
        "percentChange" : "0.00",
        "baseVolume" : "415582.12",
        "quoteVolume" : "330.11",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "1264.63",
        "low24hr" : "1250.73"
      },
      "USDC_USDT" : {
        "id" : 226,
        "last" : "0.99607",
        "lowestAsk" : "0.99615",
        "highestBid" : "0.99600",
        "percentChange" : "0.00000",
        "baseVolume" : "947497.36870",
        "quoteVolume" : "951666.65580",
        "isFrozen" : "0",
        "postOnly" : "0",
        "high24hr" : "0.99798",
        "low24hr" : "0.96874"
      }
    }

      const data = []

      Object.keys(response).forEach((key, index) => {
        data[index] = {
          name: key
        }

        Object.keys(response[key]).forEach((k, i) => {
          data[index][k] = response[key][k]
        })
      })

      dispatch({
        type: GET_QUOTES,
        payload: data
      })
    } catch(err) {
      console.log(err)
      clearQuotes()
      setError()
    }
  }

  const clearQuotes = () => dispatch({type: CLEAR_QUOTES})

  const setLoading = () => dispatch({type: SET_LOADING})

  const setError = () => dispatch({type: SET_ERROR})

  const {quotes, loading, error} = state

  return (
    <PoloniexContext.Provider value={{
      setLoading, getQuotes, clearQuotes,
      quotes, loading, error
    }}>
      {children}
    </PoloniexContext.Provider>
  )
}