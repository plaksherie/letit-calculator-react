export const getPrice = (price: number | string | undefined): string => {
    if (price === '' || typeof price === 'undefined'){
        return 'По запросу'
    }
    else {
        return `${priceFormatter(price)} руб.`
    }
}

export const priceFormatter = (price: number | string, newChar: string = " "): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, newChar)
}
