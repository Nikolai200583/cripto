import { cryptoAssets, cryptoData} from './data';

export default function fakeFethCrypto() {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(cryptoData)
        }, 2000)
    })
};

export default function fetchAssets() {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(cryptoAssets)
        }, 2000)
    })
}