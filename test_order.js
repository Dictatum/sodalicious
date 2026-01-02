// Native fetch

async function runtrace() {
    try {
        const res = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: [{ quantity: 2, name: 'Cortado', price: 50, subtotal: 100 }],
                total_amount: 100,
                payment_method: 'cash',
                customer_name: 'DebugBot'
            })
        });

        const data = await res.json();
        console.log('Order Response:', JSON.stringify(data, null, 2));

        // Check stock again
        const prodRes = await fetch('http://localhost:3000/api/products?category=Hot%20Coffee');
        const prods = await prodRes.json();
        const cortado = prods.find(p => p.name === 'Cortado');
        console.log('Cortado Stock After:', cortado.stock_quantity);

    } catch (e) {
        console.error(e);
    }
}

runtrace();
