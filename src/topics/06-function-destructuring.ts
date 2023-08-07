export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

export function taxCalculation( options: TaxCalculationOptions):number[] {

    let total = 0;

    options.products.forEach( product => {
            total += product.price;
        }
    )

    return [total, total * options.tax];

}

const result = taxCalculation({
    products: shoppingCart,
    tax: tax
});



