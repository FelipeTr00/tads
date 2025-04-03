// 1
function calcularContaEnergia(
    consumo: number,
    tarifa: number,
    imposto: number,
    bandeira: string): number {
        let valorConta = consumo * tarifa

        if (bandeira === 'amarela') { valorConta += consumo * 0.02}
        else if (bandeira === 'vermelha') { valorConta += consumo * 0.05}

        const valorFinal = valorConta * (1 + (imposto * 1/100))
        return valorFinal;
    
}


// 2
function calcularContaEnergia(

    type Bandeira = 'verde' | 'amarela' | 'vermelha';

    consumoEnergia: number,
    tarifaPorKWH: number,
    impostoPorConsumo: number,
    bandeiraConsumo: Bandeira
    ): number {
        let valorConta = consumoEnergia * tarifaPorKWH

        if (bandeiraConsumo === 'amarela') { valorConta += consumoEnergia * 0.02}
        else if (bandeiraConsumo === 'vermelha') { valorConta += consumoEnergia * 0.05}

        const valorFinal = valorConta * (1 + (impostoPorConsumo * 1/100))
        return valorFinal;
    
}