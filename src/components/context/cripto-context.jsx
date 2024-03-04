import { createContext, useState, useEffect, useContext } from "react";
import { fakeFethCrypto, fetchAssets } from "../../api";
import { percentDifference } from "../../utils";

const CryptoContext = createContext({
  assets: [],
  cripto: [],
  loading: false
});

export function CriptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [cripto, setCripto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const { result } = await fakeFethCrypto();
      const assets = await fetchAssets();

      setAssets(
        assets.map((asset) => {
          const coin = result.find((c) => c.id === asset.id);
          return {
            grow: asset.price < coin.price,
            growPercent: percentDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset
          };
        })
      );
      setCripto(result);
      setLoading(false);
    }
    preload();
  }, []);

  return (
    <CryptoContext.Provider value={{ loading, cripto, assets }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoContext;

export function useCrypto() {
  return useContext(CryptoContext);
}
