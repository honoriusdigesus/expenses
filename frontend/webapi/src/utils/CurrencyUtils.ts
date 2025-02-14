class CurrencyUtils{
    static formatToINR(amount:number){
        //Colombia
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount);
    }
}
export default CurrencyUtils;